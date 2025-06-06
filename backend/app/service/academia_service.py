from repository.academia_repository import find_academia_by_email, create_academia

def register_academia(data, logo_file=None):
    if find_academia_by_email(data['email']):
        return None  # já existe

    return create_academia(data, logo_file)
