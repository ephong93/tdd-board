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
    expect(titleInput).toBeInTheDocument()
    expect(contentInput).toBeInTheDocument()
  })
  it('renders submit button', () => {
    const { submitButton } = setup()
    expect(submitButton).toBeInTheDocument()
  })
  it('calls onSubmit if submit button is clicked', () => {
    const { submitButton } = setup()
    userEvent.click(submitButton)
    expect(onSubmit).toBeCalled()
  })
  it('changes title when user types', () => {
    const { titleInput } = setup()
    userEvent.type(titleInput, 'Dumpling')
    expect(titleInput.value).toBe('Dumpling')
  })
  it('changes content when user types', () => {
    const { contentInput } = setup()
    userEvent.type(contentInput, 'Noodles')
    expect(contentInput.value).toBe('Noodles')
  })
})