import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Experiences from '.'
import experiences from '../../../data/experience'

describe('Experiences Component', () => {
  it('renders the Experiences component correctly', () => {
    const { container } = render(<Experiences />)

    expect(screen.getByText('Experiência')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render all experience items from the map', () => {
    render(<Experiences />)

    experiences.forEach((item) => {
      expect(screen.getAllByText(item.jobTitle).length).toBeGreaterThan(0)
      expect(screen.getByText(item.company)).toBeInTheDocument()
      expect(
        screen.getByText(`${item.startDate} - ${item.endDate}`)
      ).toBeInTheDocument()
    })
  })

  it('should render the background color correctly', () => {
    const { container } = render(<Experiences />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#2c2a32' })
  })
})
