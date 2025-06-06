from model.academia import db, Academia

def find_academia_by_email(email):
    return Academia.query.filter_by(email=email).first()

def create_academia(data, logo_file=None):
    nova_academia = Academia(
        nome=data['nome'],
        cpf_cnpj=data['cpfCnpj'],
        telefone=data['telefone'],
        endereco=data['endereco'],
        modalidades=data['modalidades'],
        email=data['email']
    )
    nova_academia.set_password(data['senha'])

    if logo_file:
        nova_academia.logo = logo_file.read()

    db.session.add(nova_academia)
    db.session.commit()
    return nova_academia
