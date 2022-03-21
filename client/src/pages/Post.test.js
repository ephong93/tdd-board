import Post from './Post'
import { render, screen } from '@testing-library/react'

describe('Post', () => {
  it('renders title, author and content', () => {
    render(<Post />)
    screen.getByText('Sample Title')
    screen.getByText('Sample Author')
    screen.getByText('Sample Content')
  })
})