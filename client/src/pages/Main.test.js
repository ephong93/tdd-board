import Main from './Main'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

const mockHistory = {
  push: jest.fn()
}

jest.mock('react-router-dom', () => ({
  useHistory: () => mockHistory
}))

describe('Main', () => {
  const samplePosts = [
    {
      id: 1,
      title: 'Sample Title',
      author: 'Sample Author',
      content: 'Sample Content'
    },
    {
      id: 2,
      title: 'Sample Title 2',
      author: 'Sample Author 2',
      content: 'Sample Content 2',
    }
  ]

  const mockApi = new MockAdapter(axios, {delayResponse: 200})
  mockApi.onGet('/posts').reply(200, samplePosts)
  
  it('renders post button', () => {
    render(<Main />)
    screen.getByRole('button', {name: /post/i})
  })
  it('calls history.push when clicking post button', () => {
    render(<Main />)
    const postButton = screen.getByRole('button', {name: /post/i})
    userEvent.click(postButton)
    expect(mockHistory.push).toBeCalledWith('/post-form')
  })
  it('renders heading', () => {
    render(<Main />)
    screen.getByRole('heading', {name: /posts/i})
  })
  it('renders posts', async () => {
    render(<Main />)
    await screen.findByRole('columnheader', {name: /title/i})
    await screen.findByText('Sample Title')
  })
})