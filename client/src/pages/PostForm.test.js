import PostForm from './PostForm'
import { render, screen } from '@testing-library/react'

describe('PostForm', () => {
  it('renders inputs and labels', () => {
    render(<PostForm />)
    screen.getByRole('textbox', {name: /title/i})
    screen.getByRole('textbox', {name: /content/i})

  })
})