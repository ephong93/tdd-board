import CommentForm from './CommentForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('CommentForm', () => {
  it('renders text inputs for author and content', () => {
    render(<CommentForm />)
    screen.getByRole('textbox', {name: /author/i})
    screen.getByRole('textbox', {name: /content/i})
  })
  it('changes values of author and content when user types', () => {
    render(<CommentForm />)
    const authorInput = screen.getByRole('textbox', {name: /author/i})
    userEvent.type(authorInput, 'Roy')
    expect(authorInput.value).toBe('Roy')

    const contentInput = screen.getByRole('textbox', {name: /content/i})
    userEvent.type(contentInput, 'Nice to meet you')
    expect(contentInput.value).toBe('Nice to meet you')
  })
})