import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Bio from '.'

describe('Bio Component', () => {
  it('renders the Bio component correctly', () => {
    const { container } = render(<Bio />)

    expect(
      screen.getByRole('heading', { name: /Renan de Aguiar Modesto/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Desenvolvedor Front-End/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Desenvolvedor de Sistemas com experiência/i)
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
