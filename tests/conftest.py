import os
import pytest
import tempfile
from server import create_app

@pytest.fixture
def app():
    db_fp, db_path = tempfile.mkstemp()
    TEST_CONFIG = {
        'SQLALCHEMY_DATABASE_URI': f'sqlite:///{db_path}'
    }
    app = create_app(config=TEST_CONFIG)
    with app.app_context():
        yield app


@pytest.fixture
def client(app):
    return app.test_client()