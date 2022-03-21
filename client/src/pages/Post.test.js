import Post from './Post'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

jest.mock('react-router', () => ({
  useParams: () => ({
    id: 1
  })
}))

describe('Post', () => {
  const mockApi = new MockAdapter(axios, {delayResponse: 200})
  mockApi.onGet('/posts/1').reply(200, {
    id: 1,
    title: 'Sample Title',
    author: 'Sample Author',
    content: 'Sample Content',
    comments: [
      {
        id: 1,
        author: 'Roy',
        content: 'Nice to meet you'
      },
      {
        id: 2,
        author: 'Chen',
        content: 'Good morning'
      }
    ]
  })
  mockApi.onGet('/posts/2').reply(404)
  mockApi.onPost('/posts/1/comments').reply(200, {
    id: 1,
    title: 'Sample Title',
    author: 'Sample Author',
    content: 'Sample Content',
    comments: [
      {
        id: 1,
        author: 'Roy',
        content: 'Nice to meet you'
      },
      {
        id: 2,
        author: 'Chen',
        content: 'Good morning'
      },
      {
        id: 3,
        author: 'New author',
        content: 'New content'
      }
    ]
  })

  
  it('renders title, author and content', async () => {
    render(<Post />)
    await screen.findByText('Sample Title')
    await screen.findByText('Sample Author')
    await screen.findByText('Sample Content')
  })
  it('renders comments', async () => {
    render(<Post />)
    await screen.findByRole('heading', {name: /comments/i})
    await screen.findByText('Roy')
    await screen.findByText('Nice to meet you')
    await screen.findByText('Chen')
    await screen.findByText('Good morning')
  })
  it('renders CommentForm', async () => {
    render(<Post />)
    await screen.findByRole('textbox', {name: /author/i})
    await screen.findByRole('textbox', {name: /content/i})
  })
  it('update comments after onSubmit is called', async () => {
    render(<Post />)
    const authorInput = await screen.findByRole('textbox', {name: /author/i})
    const contentInput = await screen.findByRole('textbox', {name: /content/i})
    const submitButton = await screen.findByRole('button', {name: /submit/i})
    userEvent.type(authorInput, 'New author')
    userEvent.type(contentInput, 'New content')
    userEvent.click(submitButton)
    await screen.findByText('New author')
  }) 
  // NEED TO FIX
  it('renders no data', async () => {
    render(<Post />)
    await screen.findByText(/no data/i)
  })
})