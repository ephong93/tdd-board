class TestTest:
    def test_test(self, client):
        response = client.get('/api')
        print(response.data)
