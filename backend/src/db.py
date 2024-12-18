from decorators.db import dbDecorator

@dbDecorator
def createUsersTable(cur):
    cur.execute('''
        CREATE TABLE IF NOT EXISTS Users (
            userId INTEGER NOT NULL PRIMARY KEY,
            token STRING,
            username STRING NOT NULL,
            email STRING,
            password STRING
        )
    ''')

def createAllTables():
    createUsersTable()