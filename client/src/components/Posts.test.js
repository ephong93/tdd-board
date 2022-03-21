import Posts from './Posts'
import { render } from '@testing-library/react'

describe('Posts', () => {
  it('renders title, author', () => {
    render(<Posts />)
  })
})