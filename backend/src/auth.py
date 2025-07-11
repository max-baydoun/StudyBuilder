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
        return InputError("An account with this email is already registered. Consider logging in with this account if this is yours.").to_dict()

    if check_username_exists(username):
        return InputError("Username already exists. please use a different username").to_dict()

    # PostgreSQL uses %s, %s, ... for parameter placeholders
    query = 'INSERT INTO Users (username, email, password) VALUES (%s, %s, %s) RETURNING userId'
    cur.execute(query, (username, email, password))

    result = cur.fetchone()

    if result:
        payload = {
            'email': email,
            'exp': datetime.now() + timedelta(minutes=60)  # token is valid for 60 min
        }
        token = jwt.encode(payload, secret_key, algorithm='HS256')

        query = 'UPDATE Users SET token=%s WHERE email=%s'
        cur.execute(query, (token, email))

        return {'u_id': result[0], 'token': token}, 200
    else:
        return BackendError('Database Error', 'Unable to generate user id').to_dict()

@dbDecorator
def userLogin(cur, email, password, secret_key):
    result = getPassword(email)

    if result is None:
        return InputError("User with specified email doesn't exist").to_dict()

    user_password = str(result[0])
    if user_password != password:
        return InputError("Incorrect password. Please try again").to_dict()

    payload = {
        'email': email,
        'exp': datetime.now() + timedelta(minutes=60)  # token is valid for 60 min
    }
    token = jwt.encode(payload, secret_key, algorithm='HS256')

    # Use PostgreSQL parameter placeholders
    query = 'UPDATE Users SET token=%s WHERE email=%s'
    cur.execute(query, (token, email))

    return {'token': token}, 200

@dbDecorator
def user_logout(cur, userId):
    # PostgreSQL parameter placeholders
    query = "UPDATE Users SET token = NULL WHERE userId=%s"
    cur.execute(query, (userId,))

    return {}

@dbDecorator
def getPassword(cur, email):
    # PostgreSQL parameter placeholders
    query = 'SELECT password FROM Users WHERE email=%s'
    cur.execute(query, (email,))
    result = cur.fetchone()

    return result

@dbDecorator
def check_username_exists(cur, username):
    # PostgreSQL parameter placeholders
    query = 'SELECT COUNT(*) FROM Users WHERE username=%s'
    cur.execute(query, (username,))
    count = cur.fetchone()

    return count[0] > 0

@dbDecorator
def check_email_exists(cur, email):
    # PostgreSQL parameter placeholders
    query = 'SELECT COUNT(*) FROM Users WHERE email=%s'
    cur.execute(query, (email,))
    count = cur.fetchone()

    return count[0] > 0
