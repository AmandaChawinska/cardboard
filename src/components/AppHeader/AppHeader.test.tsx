import { render, screen } from '@testing-library/react'
import { AppHeader } from './AppHeader'

describe('AppHeader', () => {
  it('renders AppHeader', () => {
    render(<AppHeader />)
    const header = screen.getByText(/Daily stamps in time./i)
    screen.debug(header)
    expect(header).toBeInTheDocument()
  })
})
