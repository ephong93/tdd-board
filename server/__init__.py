from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app(config=None):
    app = Flask(__name__)
    if config:
        app.config.update(config)

    db.init_app(app)

    from server.api import bp
    app.register_blueprint(bp, url_prefix='/api')

    return app



