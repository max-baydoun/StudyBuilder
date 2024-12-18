from config import DATABASE                                                                                                                                                                                                                                                                                                                                                                                                                                                            
from functools import wraps
import sqlite3

def dbDecorator(func):
    @wraps(func)
    def inner(*args, **kwargs):
        res = None

        try:
            conn = sqlite3.connect(DATABASE)
            cur = conn.cursor()

            res = func(cur, *args, **kwargs)
        except sqlite3.Error as e:
            print(f'SQLite error: {str(e)}')
        finally:
            if conn:
                conn.commit()
                conn.close()
        return res
    return inner