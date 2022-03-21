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
  mockApi.onGet('/pists/2').reply(404)

  it('renders title, author and content', async () => {
    render(<Post id={1}/>)
    await screen.findByText('Sample Title')
    await screen.findByText('Sample Author')
    await screen.findByText('Sample Content')
  })
  it('renders no data', async () => {
    render(<Post id={2} />)
    await screen.findByText(/no data/i)
  })
})