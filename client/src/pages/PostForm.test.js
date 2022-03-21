import PostForm from './PostForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('PostForm', () => {
  const onSubmit = jest.fn()
  it('renders inputs and labels', () => {
    render(<PostForm />)
    screen.getByRole('textbox', {name: /title/i})
    screen.getByRole('textbox', {name: /content/i})
  })
  it('renders submit button', () => {
    render(<PostForm />)
    screen.getByRole('button', {name: /submit/i})
  })
  it('calls onSubmit if submit button is clicked', () => {
    render(<PostForm onSubmit={onSubmit} />)
    const button = screen.getByRole('button', {name: /submit/i})
    userEvent.click(button)
    expect(onSubmit).toBeCalled()
  })
})