from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app(config=None):
    app = Flask(__name__, static_folder='../client/build', static_url_path='/')
    if config:
        app.config.update(config)

    db.init_app(app)

    from server.api import bp
    app.register_blueprint(bp, url_prefix='/api')

    return app


app = create_app()

@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/')
def index():
    return app.send_static_file('index.html')


