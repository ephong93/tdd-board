import CommentForm from './CommentForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('CommentForm', () => {
  const onSubmit = jest.fn()

  it('renders text inputs for author and content and submit button', () => {
    render(<CommentForm />)
    screen.getByRole('textbox', {name: /author/i})
    screen.getByRole('textbox', {name: /content/i})
    screen.getByRole('button', {name: /submit/i})
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
  it('calls onSubmit when clicking submit button', () => {
    render(<CommentForm postId={1} onSubmit={onSubmit} />)
    const authorInput = screen.getByRole('textbox', {name: /author/i})
    const contentInput = screen.getByRole('textbox', {name: /content/i})
    userEvent.type(authorInput, 'Roy')
    userEvent.type(contentInput, 'Nice to meet you')

    const submitButton = screen.getByRole('button', {name: /submit/i})
    userEvent.click(submitButton)

    expect(onSubmit).toBeCalledWith({
      postId: 1,
      author: 'Roy',
      content: 'Nice to meet you'
    })
  })
})