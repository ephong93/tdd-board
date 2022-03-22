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

    def test_get_post(self, client):
        client.post('/api/posts', json={
            'author': 'test author',
            'title': 'test title',
            'content': 'test content'
        })
        response = client.get('/api/posts')
        assert response.status_code == 200
        posts = response.get_json()['posts']
        assert len(posts) == 1
        post = posts[0]
        assert post['author'] == 'test author'
        assert post['title'] == 'test title'
        assert post['content'] == 'test content'