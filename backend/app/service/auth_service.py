from repository.user_repository import find_user_by_email, create_user

def authenticate(email, password):
    user = find_user_by_email(email)
    if user and user.check_password(password):
        return user
    return None

def register_user(email, password):
    if find_user_by_email(email):
        return None  # já existe
    return create_user(email, password)
