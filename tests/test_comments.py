class TestComments:
    def test_create_comment(self, client):
        response = client.post('/api/posts', json={
            'author': 'test author',
            'title': 'test title',
            'content': 'test content'
        })
        assert response.status_code == 200

        response = client.post('/api/comments', json={
            'post_id': 1,
            'author': 'test author',
            'content': 'test content'
        })
        assert response.status_code == 200
        comment = response.get_json()['comment']
        assert comment['post_id'] == 1
        assert comment['author'] == 'test author'
        assert comment['content'] == 'test content'

