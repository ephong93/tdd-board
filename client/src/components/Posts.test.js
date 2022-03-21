import Posts from './Posts'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const samplePosts = [
  {
    id: 1,
    title: "Let's go yakiniku",
    author: 'Yamashita'
  },
  {
    id: 2,
    title: 'It was a great trip',
    author: 'Andrew'
  }
]

const mockHistory = {
  push: jest.fn()
}

jest.mock('react-router-dom', () => ({
  useHistory: () => mockHistory
}))

describe('Posts', () => {
  it('renders headings', () => {
    render(<Posts />)
    screen.getByRole('columnheader', {name: /title/i})
    screen.getByRole('columnheader', {name: /author/i})
  })
  it('renders title, author', () => {
    render(<Posts posts={samplePosts} />)
    screen.getByRole('cell', {name: "Let's go yakiniku"})
    screen.getByRole('cell', {name: 'Yamashita'})
  })
  it('redirect to /posts/{id} when clicking a post', () => {
    render(<Posts posts={samplePosts} />)
    const row = screen.getByRole('row', {name: /yamashita/i})
    userEvent.click(row)
    expect(mockHistory.push).toBeCalledWith('/posts/1')
  })
})