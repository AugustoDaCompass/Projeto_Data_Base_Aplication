from flask import Flask, request, jsonify,render_template
import psycopg2
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/users', methods=['POST'])
def adicionar_usuario():
    try:
        data = request.json
        nome = data.get('nome')
        
        habilidade = data.get('habilidade')
        sexo = data.get('sexo')

        
        conn = psycopg2.connect(
            dbname='quilombo',
            user='postgres',
            password='mariojol',
            host='localhost'
        )
        cur = conn.cursor()

        
        cur.execute('INSERT INTO guerreiro (nome, habilidade, sexo) VALUES (%s, %s, %s)',
                    (nome, habilidade, sexo,))

        
        conn.commit()
        conn.close()

        return jsonify({'message': 'Usuário adicionado com sucesso'}), 201

    except psycopg2.Error as e:
        return jsonify({'error': str(e)}), 500


@app.route('/batalha', methods=['POST'])
def batalhar():
    try:
        conn = psycopg2.connect(
            dbname='quilombo',
            user='postgres',
            password='mariojol',
            host='localhost'
        )
        cur = conn.cursor()
        cur.execute('SELECT id_guerreiro, nome, level FROM guerreiro')
        guerreiros = [{'id_guerreiro': row[0], 'nome': row[1], 'level': row[2]} for row in cur.fetchall()]
        conn.close()
        return jsonify(guerreiros)
    except psycopg2.Error as e:
        return jsonify({'error': str(e)}), 500




if __name__ == '__main__':
    app.run(debug=True)
    