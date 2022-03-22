from flask import request
from server import db
from server.api import bp
from server.models import Post

@bp.route('/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    post = Post()
    post.from_dict(data)
    db.session.add(post)
    db.session.commit()
    return {
        'post': post.to_dict()
    }