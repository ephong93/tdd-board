class TestPosts:
    def test_create_post(self, client):
        response = client.post('/api/posts', json={
            'author': 'test author',
            'title': 'test title',
            'content': 'test content'
        })
        assert response.status_code == 200
        post = response.get_json()['post']
        assert post['author'] == 'test author'
        assert post['title'] == 'test title'
        assert post['content'] == 'test content'
