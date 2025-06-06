from model.user_model import User, db

def find_user_by_email(email):
    return User.query.filter_by(email=email).first()

def create_user(email, password):
    user = User(email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    return user
