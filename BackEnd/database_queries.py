import sqlite3
import os

def connect_to_db():
    if os.environ.get('AM_I_IN_A_DOCKER_CONTAINER', False):
        conn = sqlite3.connect('/backend/DBForVector.db')
    else:
        conn = sqlite3.connect('DBForVector.db')
    cur = conn.cursor()
    return [conn,cur]

def convert_to_json(cur):
    return [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()]

def get_all_cards():
    conn, cur = connect_to_db()
    cur.execute("""SELECT * FROM Cards""")
    results = convert_to_json(cur)
    conn.commit()
    print(results)
    conn.close()
    return results

def get_all_GIFS():
    conn, cur = connect_to_db()
    cur.execute("""SELECT * FROM GIFS""")
    results = convert_to_json(cur)
    conn.commit()
    print(results)
    conn.close()
    return results

def get_GIF(search_term: str):
    conn, cur = connect_to_db()
    cur.execute("""SELECT URL FROM GIFS WHERE search_term=?""",(search_term,))
    results = convert_to_json(cur)[0]
    conn.commit()
    print(results)
    conn.close()
    return results

#get_all_cards()
#get_all_GIFS()
#get_GIF("bank-draft")