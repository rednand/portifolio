import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Bio from '.'

describe('Bio Component', () => {
  it('renders the Bio component correctly', () => {
    const { container } = render(<Bio />)

    expect(
      screen.getByText('lorem ipsium lorem ipsiumlorem')
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Analista de Sistemas com experiência na área/i)
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the background color correctly', () => {
    const { container } = render(<Bio />)

    expect(container.firstChild).toHaveStyle(`
      background: linear-gradient(120deg, #2c2a32 57%, #48d8a4 33%);
    `)
  })
})
