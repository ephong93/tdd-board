import PostForm from './PostForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('PostForm', () => {
  const onSubmit = jest.fn()
  const setup = () => {
    render(<PostForm onSubmit={onSubmit} />)
    const titleInput = screen.getByRole('textbox', {name: /title/i})
    const contentInput = screen.getByRole('textbox', {name: /content/i})
    const submitButton = screen.getByRole('button', {name: /submit/i})
    return {
      titleInput,
      contentInput,
      submitButton
    }
  }
  it('renders inputs and labels', () => {
    const { titleInput, contentInput } = setup()
    expect(titleInput).toBeTruthy()
    expect(contentInput).toBeTruthy()
  })
  it('renders submit button', () => {
    const { submitButton } = setup()
    expect(submitButton).toBeTruthy()
  })
  it('calls onSubmit if submit button is clicked', () => {
    const { submitButton } = setup()
    userEvent.click(submitButton)
    expect(onSubmit).toBeCalled()
  })
})