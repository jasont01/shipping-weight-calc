import { render, screen } from '@testing-library/react'

import App from '../App'

describe('App', () => {
  it('should render <App>', () => {
    render(<App />)

    const header = screen.getByText('Shipping Weight Calculator')
    expect(header).toBeInTheDocument()
  })
})
