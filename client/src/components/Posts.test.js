import Posts from './Posts'
import { render, screen } from '@testing-library/react'

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

describe('Posts', () => {
  it('renders title, author', () => {
    render(<Posts posts={samplePosts} />)
    screen.getByText("Let's go yakiniku")
    screen.getByText('Yamashita')
  })
})