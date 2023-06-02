import { Counter } from './Counter'
import { render, screen } from '@testing-library/react'

describe('Counter', () => {
  it('should render', () => {
    render(<Counter />)
    expect(screen.getByText('Counter 0')).toBeInTheDocument()
  })
})
