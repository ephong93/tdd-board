from server import db

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String)
    title = db.Column(db.String)
    content = db.Column(db.Text)
    comments = db.relationship('Comment', backref='post')

    def from_dict(self, data):
        for field in ['author', 'title', 'content']:
            if field in data:
                setattr(self, field, data[field])

    def to_dict(self):
        return {
            'id': self.id,
            'author': self.author,
            'title': self.title,
            'content': self.content
        }

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    author = db.Column(db.String)
    content = db.Column(db.String)

    def from_dict(self, data):
        for field in ['post_id', 'author', 'content']:
            if field in data:
                setattr(self, field, data[field])

    def to_dict(self):
        return {
            'id': self.id,
            'post_id': self.post_id,
            'author': self.author,
            'content': self.content
        }