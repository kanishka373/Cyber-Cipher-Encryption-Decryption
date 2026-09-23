from flask import Flask, render_template, request, redirect
from utils.cipher import encrypt_caesar, decrypt_caesar
import sqlite3
import qrcode
import os

app = Flask(__name__)
conn = sqlite3.connect(
    'history.db',
    check_same_thread=False
)

cursor = conn.cursor()
cursor.execute('''

CREATE TABLE IF NOT EXISTS history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    original TEXT,
    encrypted TEXT
)

''')

conn.commit()

@app.route('/', methods=['GET', 'POST'])

def home():

    result = ""

    qr_path = ""

    if request.method == 'POST':

        text = request.form['text']

        shift = int(
            request.form['shift']
        )

        action = request.form['action']

        algorithm = request.form['algorithm']

        if algorithm == 'caesar':

            # ENCRYPT

            if action == 'encrypt':

                result = encrypt_caesar(
                    text,
                    shift
                )

            # DECRYPT

            elif action == 'decrypt':

                result = decrypt_caesar(
                    text,
                    shift
                )

        elif algorithm == 'reverse':

            result = text[::-1]

        clean_text = text.strip()

        clean_result = result.strip()

        cursor.execute(

            '''

            SELECT * FROM history

            WHERE

            LOWER(TRIM(original)) = LOWER(TRIM(?))

            AND

            LOWER(TRIM(encrypted)) = LOWER(TRIM(?))

            ''',

            (clean_text, clean_result)
        )

        existing = cursor.fetchone()
        if not existing:

            cursor.execute(

                '''

                INSERT INTO history(
                    original,
                    encrypted
                )

                VALUES (?, ?)

                ''',

                (clean_text, clean_result)
            )

            conn.commit()

        qr = qrcode.make(result)
        if not os.path.exists('static/qr'):

            os.makedirs('static/qr')

        qr_path = 'static/qr/result_qr.png'

        qr.save(qr_path)

    cursor.execute(

        '''

        SELECT * FROM history

        ORDER BY id DESC

        '''
    )

    history = cursor.fetchall()
    return render_template(

        'index.html',

        result=result,
        history=history,
        qr_path=qr_path
    )
@app.route('/delete-history')

def delete_history():

    cursor.execute(
        "DELETE FROM history"
    )

    conn.commit()

    return redirect('/')
if __name__ == '__main__':
    app.run(debug=False, use_reloader=False)