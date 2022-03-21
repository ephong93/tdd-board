import Main from './Main'
import { render, screen } from '@testing-library/react'

describe('Main', () => {
  it('renders post button', () => {
    render(<Main />)
    screen.getByRole('button', {name: /post/i})
  })
})