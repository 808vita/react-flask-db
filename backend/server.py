from flask_mysqldb import MySQL
from flask import Flask
from flask import jsonify
from flask import request

from dotenv import load_dotenv
import os
load_dotenv()

# import requests

app = Flask(__name__)


@app.route("/")
def oof():
    return f'oof secret code: {os.getenv("secret")}'


if __name__ == "__main__":
    app.run(debug=True)
