import PostForm from './PostForm'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'

const mockPost = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate
}))
jest.mock('axios', () => ({
  post: (...args) => mockPost(...args)
}))

describe('PostForm', () => {
  const setup = () => {
    render(<PostForm />)
    const authorInput = screen.getByRole('textbox', {name: /author/i})
    const titleInput = screen.getByRole('textbox', {name: /title/i})
    const contentInput = screen.getByRole('textbox', {name: /content/i})
    const submitButton = screen.getByRole('button', {name: /submit/i})
    return {
      authorInput,
      titleInput,
      contentInput,
      submitButton
    }
  }

  beforeEach(() => {
    mockPost.mockResolvedValue({
      status: 200
    })
  })
  it('renders inputs and labels', () => {
    const { authorInput, titleInput, contentInput } = setup()
    expect(authorInput).toBeInTheDocument()
    expect(titleInput).toBeInTheDocument()
    expect(contentInput).toBeInTheDocument()
  })
  it('renders submit button', () => {
    const { submitButton } = setup()
    expect(submitButton).toBeInTheDocument()
  })
  it('changes author when user types', () => {
    const { authorInput } = setup()
    userEvent.type(authorInput, 'Chopsticks')
    expect(authorInput.value).toBe('Chopsticks')
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
  it('calls onSubmit if submit button is clicked', async () => {
    const { authorInput, titleInput, contentInput, submitButton } = setup()
    userEvent.type(authorInput, 'Chopsticks')
    userEvent.type(titleInput, 'Dumpling')
    userEvent.type(contentInput, 'Noodles')
    userEvent.click(submitButton)

    expect(mockPost).toBeCalledWith('/api/posts', {
      author: 'Chopsticks',
      title: 'Dumpling',
      content: 'Noodles'
    })
    await waitFor(() => expect(mockNavigate).toBeCalledWith('/'))
  })
})