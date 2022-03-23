from flask import request
from server import db
from server.api import bp
from server.models import Comment

@bp.route('/comments', methods=['POST'])
def create_comment():
    data = request.get_json()
    comment = Comment()
    comment.from_dict(data)
    db.session.add(comment)
    db.session.commit()
    comments = [comment.to_dict() for comment in Comment.query.filter_by(post_id=comment.post_id)]
    return {
        'comments': comments
    }

@bp.route('/comments', methods=['GET'])
def get_comment():
    comments = [comment.to_dict() for comment in Comment.query.all()]
    return {
        'comments': comments
    }

