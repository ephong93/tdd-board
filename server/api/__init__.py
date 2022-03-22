from flask import Blueprint

bp = Blueprint('api', __name__)

@bp.route('/',  methods=['GET'])
def main():
    return 'Hello world!'