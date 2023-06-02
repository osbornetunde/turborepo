import App from './App'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  it('renders without crashing', () => {
    expect(App).toBeTruthy()
  })
  it('should render content', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })
})
