from flask import Flask, request
from flask_cors import CORS
from auth import userRegister, userLogin
from operator import itemgetter
from db import createAllTables

app = Flask(__name__)
app.config['SECRET_KEY'] = 'vtvMS7NnVmUOH2nY3Vxu'
CORS(app)

@app.route("/")
def hello():
  return "Hello World!"

@app.route("/auth/register", methods=['POST'])
def register():
    name, email, password = itemgetter('name', 'email', 'password')(request.get_json())
    return userRegister(name, email, password, app.config['SECRET_KEY'])

@app.route("/auth/login", methods=['POST'])
def login():
    email, password = itemgetter('email', 'password')(request.get_json())
    return userLogin(email, password, app.config['SECRET_KEY'])
  

if __name__ == "__main__":
    createAllTables()
    app.run()