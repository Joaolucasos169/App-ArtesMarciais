from flask import Blueprint, request, jsonify
from service.academia_service import register_academia

register_bp = Blueprint('register_academia', __name__)

@register_bp.route('/register-academia', methods=['POST'])
def register_academia_route():
    try:
        data = {
            'nome': request.form['nome'],
            'cpfCnpj': request.form['cpfCnpj'],
            'telefone': request.form['telefone'],
            'endereco': request.form['endereco'],
            'modalidades': request.form.getlist('modalidades[]'),
            'email': request.form['email'],
            'senha': request.form['senha'],
            'confirmarSenha': request.form['confirmarSenha']
        }
        logo_file = request.files.get('logo')

        if data['senha'] != data['confirmarSenha']:
            return jsonify({'message': 'As senhas não coincidem.'}), 400

        academia = register_academia(data, logo_file)

        if not academia:
            return jsonify({'message': 'E-mail já cadastrado.'}), 400

        return jsonify({'message': 'Academia cadastrada com sucesso!'}), 201

    except Exception as e:
        print(e)
        return jsonify({'message': 'Erro ao cadastrar academia.'}), 500
