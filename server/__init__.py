from flask import Flask


def create_app():
    app = Flask(__name__)

    from server.api import bp

    app.register_blueprint(bp, url_prefix='/api')

    return app



