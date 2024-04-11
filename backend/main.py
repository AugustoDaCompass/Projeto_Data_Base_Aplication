from flask import Flask, request, jsonify
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

        # Conectar ao banco de dados
        conn = psycopg2.connect(
            dbname='quilombo',
            user='postgres',
            password='senha',
            host='localhost'
        )
        cur = conn.cursor()

        # Executar a inserção na tabela de usuários
        cur.execute('INSERT INTO guerreiro (nome, habilidade, sexo) VALUES (%s, %s, %s)', (nome, habilidade,sexo,))
        
        # Commit da transação e fechamento da conexão
        conn.commit()
        conn.close()

        return jsonify({'message': 'Usuário adicionado com sucesso'}), 201

    except psycopg2.Error as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
