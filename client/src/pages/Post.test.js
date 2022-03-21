import Post from './Post'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { render, screen } from '@testing-library/react'

describe('Post', () => {
  const mockApi = new MockAdapter(axios, {delayResponse: 200})
  mockApi.onGet('/posts/1').reply(200, {
    id: 1,
    title: 'Sample Title',
    author: 'Sample Author',
    content: 'Sample Content'
  })

  it('renders title, author and content', async () => {
    render(<Post id={1}/>)
    await screen.findByText('Sample Title')
    await screen.findByText('Sample Author')
    await screen.findByText('Sample Content')
  })
})