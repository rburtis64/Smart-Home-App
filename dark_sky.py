from darksky import forecast
from datetime import date, timedelta
import psycopg2
from config import ConfigParser

def insert_vendor_list(vendor_list):
    """ insert multiple vendors into the vendors table  """
    sql = "INSERT INTO vendors(vendor_name) VALUES(%s)"
    conn = psycopg2.connect("dbname=Team1 user=team1 password=C123456d")
    try:
        # read database configuration
        params = config()
        # connect to the PostgreSQL database
        conn = psycopg2.connect(**params)
        # create a new cursor
        cur = conn.cursor()
        # execute the INSERT statement
        cur.executemany(sql,vendor_list)
        # commit the changes to the database
        conn.commit()
        # close communication with the database
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()

def darkSky():

    ALABAMA = 33.498596, -86.805523
    API_KEY = 0d1678a4656f0eab5a5337e46809a31f

    weekday = date.today()
    with forecast('API_KEY', *ALABAMA) as alabama:
        for hour in alabama.daily:
            hour = dict(day = date.strftime(weekday, '%a'),
                        time = hourly.time,
                       weather =  hourly.summary,
                       temp = day.temperature
                       )


if __name__ == '__main__':
    connect()
