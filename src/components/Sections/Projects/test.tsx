import { render, screen } from '@testing-library/react'
import Projects from '.'

describe('<Projects />', () => {
  it('should render the heading', () => {
    const { container } = render(<Projects />)

    expect(
      screen.getByRole('heading', { name: /Projetos/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the CardProjects component', async () => {
    render(<Projects />)
    const cardProjects = await screen.findByTestId('card-projects')
    expect(cardProjects).toBeInTheDocument()
  })
})
