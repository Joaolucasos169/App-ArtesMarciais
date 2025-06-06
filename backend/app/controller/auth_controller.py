from flask import request, jsonify
from service.auth_service import authenticate
from service.auth_service import register_user

def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = authenticate(email, password)

    if user:
        return jsonify({"message": "Login realizado com sucesso!", "user": {"email": user.email}}), 200
    else:
        return jsonify({"message": "Credenciais inválidas."}), 401

def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Email e senha são obrigatórios."}), 400

    user = register_user(email, password)

    if user:
        return jsonify({"message": "Usuário registrado com sucesso!", "user": {"email": user.email}}), 201
    else:
        return jsonify({"message": "Usuário já existe."}), 409
