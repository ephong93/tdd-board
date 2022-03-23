class TestPosts:
    def test_create_post(self, client):
        response = client.post('/api/posts', json={
            'author': 'test author',
            'title': 'test title',
            'content': 'test content'
        })
        assert response.status_code == 200
        post = response.get_json()['post']
        assert post['id'] == 1
        assert post['author'] == 'test author'
        assert post['title'] == 'test title'
        assert post['content'] == 'test content'

    def test_get_post(self, client):
        client.post('/api/posts', json={
            'author': 'test author',
            'title': 'test title',
            'content': 'test content'
        })
        response = client.get('/api/posts/1')
        assert response.status_code == 200
        post = response.get_json()['post']
        assert post['id'] == 1
        assert post['author'] == 'test author'
        assert post['title'] == 'test title'
        assert post['content'] == 'test content'


    def test_get_posts(self, client):
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
        assert post['id'] == 1
        assert post['author'] == 'test author'
        assert post['title'] == 'test title'
        assert post['content'] == 'test content'

    def test_get_comments_of_post(self, client):
        client.post('/api/posts', json={
            'author': 'test author',
            'title': 'test title',
            'content': 'test content'
        })
        client.post('/api/comments', json={
            'post_id': 1,
            'author': 'test author',
            'content': 'test content'
        })
        response = client.get('/api/posts/1/comments')
        assert response.status_code == 200
        comments = response.get_json()['comments']
        assert len(comments) == 1
        comment = comments[0]
        assert comment['post_id'] == 1
        assert comment['author'] == 'test author'
        assert comment['content'] == 'test content'