import Main from './Main'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockHistory = {
  push: jest.fn()
}

jest.mock('react-router-dom', () => ({
  useHistory: () => mockHistory
}))

describe('Main', () => {
  it('renders post button', () => {
    render(<Main />)
    screen.getByRole('button', {name: /post/i})
  })
  it('calls history.push when clicking post button', () => {
    render(<Main />)
    const postButton = screen.getByRole('button', {name: /post/i})
    userEvent.click(postButton)
    expect(mockHistory.push).toBeCalledWith('/post-form')
  })
})