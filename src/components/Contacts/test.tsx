import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Contacts from '.'
import About from '../Sections/About/about'

describe('About Component', () => {
  it('renders the About component correctly', () => {
    const { container } = render(<Contacts isProjectsVisible={true} />)

    expect(screen.getByText(/Outros projetos/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the background color correctly', () => {
    const { container } = render(<About />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#2c2a32' })
  })
})
