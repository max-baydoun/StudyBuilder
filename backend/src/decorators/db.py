from functools import wraps
import psycopg2

def dbDecorator(func):
    @wraps(func)
    def inner(*args, **kwargs):
        res = None
        try:
            conn = psycopg2.connect("postgres://0193f68a-8365-75f3-be1c-e73785c2a4b6:7fea3964-b650-4961-8741-16c2d39edaea@us-west-2.db.thenile.dev/nile_sky_ocean")
            conn.autocommit = True
            cur = conn.cursor()
            res = func(cur, *args, **kwargs)
        except psycopg2.Error as e:
            print(f'Postgres error: {str(e)}')
            raise
        finally:
            if conn: conn.close()
        return res
    return inner