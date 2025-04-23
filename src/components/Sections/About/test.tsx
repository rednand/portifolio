import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from './about'

describe('About Component', () => {
  it('renders the About component correctly', () => {
    const { container } = render(<About />)

    expect(screen.getByText('Sobre')).toBeInTheDocument()

    expect(
      screen.getByText(/Minha jornada na tecnologia começou no início de 2019/i)
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the background color correctly', () => {
    const { container } = render(<About />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#2c2a32' })
  })
})
