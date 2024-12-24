from decorators.db import dbDecorator

@dbDecorator
def createUsersTable(cur):
    cur.execute('''
        CREATE TABLE IF NOT EXISTS Users (
            userId SERIAL PRIMARY KEY,
            token TEXT,
            username TEXT NOT NULL,
            email TEXT,
            password TEXT
        );
    ''')

def createAllTables():
    createUsersTable()