from flask_jwt_extended import JWTManager
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import create_access_token, decode_token
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

app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")  # Change this!
jwt = JWTManager(app)


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


if __name__ == "__main__":
    app.run(debug=True)
