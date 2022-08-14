
from flask import Flask, render_template
from flask import jsonify
from flask import request


from flask_mysqldb import MySQL
from flask_cors import CORS


from dotenv import load_dotenv
import os
load_dotenv()


# import requests

app = Flask(__name__)
CORS(app)


# for local db
# app.config['MYSQL_HOST'] = "localhost"
# app.config['MYSQL_USER'] = "root"
# app.config['MYSQL_PASSWORD'] = ""
# app.config['MYSQL_DB'] = "oof"

# freeSqlDB
app.config['MYSQL_HOST'] = os.getenv("MYSQL_HOST")
app.config['MYSQL_USER'] = os.getenv("MYSQL_USER")
app.config['MYSQL_PASSWORD'] = os.getenv("MYSQL_PASSWORD")
app.config['MYSQL_DB'] = os.getenv("MYSQL_DB")

mysql = MySQL(app)


@app.route("/")
def oof():
    return f'oof secret code: {os.getenv("secret")}'


def run_get_sql(sql_query):
    """ 
    function used for running sql queries for some routes
    """
    try:
        cur = mysql.connection.cursor()
        resultsFromSql = cur.execute(sql_query)

        if resultsFromSql > 0:
            result_list = cur.fetchall()
            return jsonify(result_list), 200

    except Exception as e:
        print(f'An exception occurred {e}')
        return (f'An exception occurred {e}', 500)
    return


@app.route("/api/list-customers", methods=['GET'])
def list_customers():
    """
    returns customers list json , to be used in dropdown.
    this route needs protection.
    """

    return run_get_sql("SELECT * FROM customer")


@app.route("/api/list-products", methods=['GET'])
def list_products():
    """
    returns products list json , to be used in dropdown.
    this route needs protection.
    """

    return run_get_sql("SELECT * FROM product")


@app.route("/api/list-subscriptions", methods=['GET'])
def list_subscriptions():
    """
    returns subscriptions list json , to be used listing subscriptions.
    this route needs protection.
    """

    return run_get_sql("SELECT Subscription_ID,Customer_ID,Product_Name,DATE_FORMAT(Start_Date,'%Y-%m-%d'),DATE_FORMAT(End_Date,'%Y-%m-%d'),Users_Count FROM subscription")


@app.route("/api/reports-data", methods=['GET'])
def reports_data():
    """
    returns subscriptions list json , to be used listing subscriptions.
    this route needs protection.
    """

    return run_get_sql("SELECT product.Product_Name,product.User_Annual_Cost,customer.Name,subscription.Users_Count,DATE_FORMAT(Start_Date,'%Y-%m-%d'),DATE_FORMAT(End_Date,'%Y-%m-%d')  FROM subscription , product,customer WHERE subscription.Product_Name=product.Product_Name AND subscription.Customer_ID=customer.Customer_ID ")


# @app.route("/api/validate", methods=['GET'])
def validate(customer_id, selected_product_id):
    """
    check if the customer id and product already in db 
    """
    try:
        # customer_id = "2"
        # selected_product_id = "SigmaMemePro"
        cur = mysql.connection.cursor()
        already_purchased = cur.execute(
            f"SELECT Customer_ID,Product_Name FROM subscription WHERE Customer_ID=%s AND Product_Name=%s", (customer_id, selected_product_id))

        if already_purchased > 0:
            already_purchased_list = cur.fetchall()
            return True
        if already_purchased == 0:
            already_purchased_list = cur.fetchall()
            return False

    except Exception as e:
        print(f'An exception occurred {e}')
        return (f'An exception occurred {e}')


@app.route("/api/add-subscription", methods=['GET', 'POST'])
def add_subscription():
    """
    api end point to add new subscriptions.
    This api should also have validations to check whether the selection combination of 
    subscription already exists in the db.
    If it does not exist , add entry into the required table.
    If it does exist , return json stating that the current selection exists
    """
    customer_id = request.form['customer_id']
    selected_product_id = request.form['selected_product_id']
    start_date = request.form['start_date']
    end_date = request.form['end_date']
    users_count = request.form['users_count']

    # customer_id = "4"
    # selected_product_id = "SigmaMemePro"
    # start_date = "2022-08-12"
    # end_date = "2022-08-15"
    # users_count = 2
    try:
        isPurchased = validate(customer_id, selected_product_id)
        if isPurchased == False:
            cur = mysql.connection.cursor()

            cur.execute(f"INSERT INTO subscription (Customer_ID,Product_Name,Start_Date,End_Date,Users_Count) VALUES(%s,%s,%s,%s,%s)", (customer_id, selected_product_id, start_date, end_date, users_count)
                        )
            mysql.connection.commit()
            cur.close()
            return "Added Entry", 201
        else:
            return "Already Purchased", 400

    except Exception as e:
        print(f'An exception occurred {e}')
        return (f'An exception occurred {e}', 500)


@app.route("/api/edit-subscription", methods=['GET', 'POST'])
def edit_subscription():
    """
    api end point to edit subscriptions.
    this api should be able to extend the end date / set end date to today.
    """
    # subscription_id = request.form['subscription_id']
    # customer_id = request.form['customer_id']
    # selected_product_id = request.form['selected_product_id']
    # start_date = request.form['start_date']
    # end_date = request.form['end_date']
    # new_end_date = request.form['new_end_date']
    # users_count = request.form['users_count']

    subscription_id = request.form['subscription_id']
    end_date = request.form['end_date']

    # subscription_id = "1"
    # end_date = "2022-08-20"
    cur = mysql.connection.cursor()

    cur.execute(f"UPDATE subscription SET End_Date=%s WHERE Subscription_ID=%s", (end_date, subscription_id)
                )
    mysql.connection.commit()
    cur.close()
    return "Record Edited", 200


if __name__ == "__main__":
    app.run(debug=True)
