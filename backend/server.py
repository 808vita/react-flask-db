from flask import Flask, render_template
from flask import jsonify
from flask import request


from flask_jwt_extended import JWTManager
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import create_access_token, decode_token


from flask_mysqldb import MySQL
from flask_cors import CORS


from dotenv import load_dotenv
import os
load_dotenv()


# import requests

app = Flask(__name__)
CORS(app)

app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")  # Change this!
jwt = JWTManager(app)


app.config['MYSQL_HOST'] = "localhost"
app.config['MYSQL_USER'] = "root"
app.config['MYSQL_PASSWORD'] = ""
app.config['MYSQL_DB'] = "oof"

mysql = MySQL(app)


@app.route("/")
def oof():
    return f'oof secret code: {os.getenv("secret")}'


# auth ______
@app.route("/api/test-token", methods=['GET'])
def gen_token():
    """ 
   Generate new test token 
    """
    access_token = create_access_token(identity="test@token")
    return jsonify(access_token="Bearer "+access_token)


@app.route("/api/google-auth", methods=['POST'])
def google_auth():
    """ 
    Generate new jwt token after google oauth2 and decoding for email.
    new token is generated using the email .
    """
    email = request.form.get('email')
    access_token = create_access_token(identity=email)
    return jsonify(access_token="Bearer "+access_token)


@app.route("/api/verify-token", methods=['GET', "POST"])
@jwt_required()
def verify_token():
    """ 
    api end point to verify token.
    if the token is valid , json would be returned.
    otherwise error will be sent as response.
    """
    return jsonify(auth=True, userName=get_jwt_identity(),)
# auth ______


@app.route("/api/list-customers", methods=['GET'])
def list_customers():
    """
    returns customers list json , to be used in dropdown.
    this route needs protection.
    """
    try:
        cur = mysql.connection.cursor()
        customers = cur.execute("SELECT * FROM customer")

        if customers > 0:
            customers_list = cur.fetchall()
            return jsonify(customers_list)

    except Exception as e:
        print(f'An exception occurred {e}')
        return (f'An exception occurred {e}')


@app.route("/api/list-products", methods=['GET'])
def list_products():
    """
    returns products list json , to be used in dropdown.
    this route needs protection.
    """
    try:
        cur = mysql.connection.cursor()
        products = cur.execute("SELECT * FROM product")

        if products > 0:
            products_list = cur.fetchall()
            return jsonify(products_list)

    except Exception as e:
        print(f'An exception occurred {e}')
        return (f'An exception occurred {e}')


@app.route("/api/list-subscriptions", methods=['GET'])
def list_subscriptions():
    """
    returns subscriptions list json , to be used listing subscriptions.
    this route needs protection.
    """
    try:
        cur = mysql.connection.cursor()
        subscriptions = cur.execute("SELECT * FROM subscription")

        if subscriptions > 0:
            subscriptions_list = cur.fetchall()
            return jsonify(subscriptions_list)

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
    # customer_id = request.form['customerId']
    # selected_product_id = request.form['productId']
    # start_date = request.form['startDate']
    # end_date = request.form['endDate']
    # users_count = request.form['usersCount']

    customer_id = "4"
    selected_product_id = "SigmaMemePro"
    start_date = "2022-08-12"
    end_date = "2022-08-15"
    users_count = 2

    cur = mysql.connection.cursor()

    cur.execute(f"INSERT INTO subscription (Customer_ID,Product_Name,Start_Date,End_Date,Users_Count) VALUES(%s,%s,%s,%s,%s)", (customer_id, selected_product_id, start_date, end_date, users_count)
                )
    mysql.connection.commit()
    cur.close()
    return "oof add"


@app.route("/api/edit-subscription", methods=['POST'])
def edit_subscription():
    """
    api end point to edit subscriptions.
    this api should be able to extend the end date / set end date to today.
    """
    customer_id = request.form['customerId']
    selected_product_id = request.form['productId']
    start_date = request.form['startDate']
    end_date = request.form['endDate']
    new_end_date = request.form['newEndDate']
    users_count = request.form['usersCount']

    return "oof edit"


if __name__ == "__main__":
    app.run(debug=True)
