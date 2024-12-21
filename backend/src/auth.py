import re
from datetime import datetime, timedelta
from decorators.db import dbDecorator
import jwt
from error import BackendError, InputError

@dbDecorator
def userRegister(cur, username, email, password, secret_key):
    if len(username) < 1 or len(username) > 50:
        return InputError("Username must be between 1 and 50 characters. Please try again.").to_dict()

    if len(password) < 6:
        return InputError("Password must be at least 6 characters long. Please try again.").to_dict()

    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,}\b'
    if not re.fullmatch(regex, email):
        return InputError("Invalid email! Please try again").to_dict()

    if check_email_exists(email):
        return InputError("An account with this email is already registered").to_dict()

    if check_username_exists(username):
        return InputError("Username already exists. please use a different username").to_dict()


    query = 'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)'
    cur.execute(query, (username, email, password))

    cur.execute('SELECT last_insert_rowid() AS u_id;')
    result = cur.fetchone()

    if result:
        payload = {
        'email':email,
        'exp': datetime.now() + timedelta(minutes=60) #token is valid for 60 min
        }
        token = jwt.encode(payload, secret_key, algorithm='HS256')

        query = 'UPDATE Users SET token=? WHERE email=?'
        cur.execute(query, (token, email))

        return {'u_id' : result[0], 'token': token}, 200
    else:
        return BackendError('Database Error', 'Unable to generate user id').to_dict()

@dbDecorator
def userLogin(cur, email, password, secret_key):
    result = getPassword(email)

    if result is None:
        return InputError("User with specified email doesn't exist").to_dict()
   
    user_password = str(result[0])
    if (user_password != password):
        return InputError("Incorrect password. Please try again").to_dict
   
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