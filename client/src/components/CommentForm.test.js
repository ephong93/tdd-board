import CommentForm from './CommentForm'
import { render, screen } from '@testing-library/react'

describe('CommentForm', () => {
  it('renders text inputs for author and content', () => {
    render(<CommentForm />)
    screen.getByRole('textbox', {name: /author/i})
    screen.getByRole('textbox', {name: /content/i})
  })
})