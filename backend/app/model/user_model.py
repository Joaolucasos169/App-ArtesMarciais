from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class Academia(db.Model):
    __tablename__ = 'academias'

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    cpf_cnpj = db.Column(db.String(100), unique=True)
    telefone = db.column(db.String(20), unique=True, nulable=False)
    endereco = db.column(db.String(200), nullable=False)
    modalidades = db.column(db.String(200), nullable=False)
    email = db.Column(db.String(120), unique=True)
    senha_hash = db.Column(db.String(128), nullable=False)
    logo_path = db.Column(db.string(200))
    criado_em = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, nome, cpf_cnpj, telefone, endereco, modalidades, email, senha, logo_path=None):
        self.nome = nome
        self.cpf_cnpj = cpf_cnpj
        self.telefone = telefone
        self.endereco = endereco
        self.modalidades = modalidades
        self.email = email
        self.senha_hash = generate_password_hash(senha)
        self.logo_path = logo_path

    def verificar_senha(self, senha):
        return check_password_hash(self.senha_hash, senha)

    def __repr__(self):
        return f'<Academia {self.nome}>'
