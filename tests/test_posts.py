class TestPosts:
    def test_post(self, client):
        response = client.get('/api')
        print(response.data)
