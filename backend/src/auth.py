import re
from datetime import datetime, timedelta
from decorators.db import dbDecorator
import jwt

@dbDecorator
def userRegister(cur, username, email, password):
    if len(username) < 1 or len(username) > 50:
        return {"error": "username must be between 1 and 50 characters. Please try again."}

    if len(password) < 6:
        return {"error": "Password must be at least 6 characters long. Please try again."}
   
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,}\b'
    if not re.fullmatch(regex, email):
        return {"error": "Invalid email! Please try again"}
   
    if check_email_exists(email):
        return {"error": "An account with this email is already registered"}
   
   
    if check_username_exists(username):
        return {"error": "username already exists. please use a different username"}


    query = 'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)'
    cur.execute(query, (username, email, password))

    cur.execute('SELECT last_insert_rowid() AS u_id;')
    result = cur.fetchone()

    if result:
        return {'u_id' : result[0]}

@dbDecorator
def userLogin(cur, email, password, secret_key):
    result = getPassword(email)

    if result is None:
        return {"error": "user with specified email doesn't exist"}
   
    user_password = str(result[0])
    if (user_password != password):
        return {"error": "Incorrect password. Please try again"}
   
    payload = {
        'email':email,
        'exp': datetime.now() + timedelta(minutes=60) #token is valid for 60 min
    }
    token = jwt.encode(payload, secret_key, algorithm='HS256')

    query = 'UPDATE Users SET token=? WHERE email=?'
    cur.execute(query, (token, email))

    return {'token': token}

@dbDecorator
def user_logout(cur, userId):
    query = "UPDATE Users SET token = ? WHERE user_id = ?"
    cur.execute(query, (None, userId))

    return {}

@dbDecorator
def getPassword(cur, username):
    query = 'select password FROM Users WHERE email = ?'
    cur.execute(query, (username, ))
    result = cur.fetchone()

    return result

@dbDecorator
def check_username_exists(cur, username):
    query = 'SELECT COUNT(*) FROM Users WHERE username = ?'
    cur.execute(query, (username, ))
    count = cur.fetchone()

    if count[0] > 0:
        return True
    return False

@dbDecorator
def check_email_exists(cur, email):
    query = 'SELECT COUNT(*) FROM Users WHERE email = ?'
    cur.execute(query, (email, ))
    count = cur.fetchone()

    if count[0] > 0:
        return True
    return False