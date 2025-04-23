import { render, screen, fireEvent } from '@testing-library/react'
import ScrollButtons from '.'
import React from 'react'

const createRefMock = () => {
  const scrollIntoView = jest.fn()
  return {
    current: {
      scrollIntoView
    }
  }
}

describe('<ScrollButtons />', () => {
  it('should render all scroll buttons and trigger scrollIntoView on click', () => {
    const bioRef = createRefMock()
    const aboutRef = createRefMock()
    const experiencesRef = createRefMock()
    const projectsRef = createRefMock()

    render(
      <ScrollButtons
        bioRef={bioRef as any}
        aboutRef={aboutRef as any}
        experiencesRef={experiencesRef as any}
        projectsRef={projectsRef as any}
      />
    )

    expect(screen.getByRole('button', { name: /bio/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sobre/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /experiências/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /projetos/i })
    ).toBeInTheDocument()

    fireEvent.click(screen.getByText(/bio/i))
    expect(bioRef.current.scrollIntoView).toHaveBeenCalled()

    fireEvent.click(screen.getByText(/sobre/i))
    expect(aboutRef.current.scrollIntoView).toHaveBeenCalled()

    fireEvent.click(screen.getByText(/experiências/i))
    expect(experiencesRef.current.scrollIntoView).toHaveBeenCalled()

    fireEvent.click(screen.getByText(/projetos/i))
    expect(projectsRef.current.scrollIntoView).toHaveBeenCalled()
  })

  it('should not throw if ref.current is null', () => {
    const nullRef = { current: null }

    render(
      <ScrollButtons
        bioRef={nullRef}
        aboutRef={nullRef}
        experiencesRef={nullRef}
        projectsRef={nullRef}
      />
    )

    fireEvent.click(screen.getByText(/bio/i))
    fireEvent.click(screen.getByText(/sobre/i))
    fireEvent.click(screen.getByText(/experiências/i))
    fireEvent.click(screen.getByText(/projetos/i))
  })
})
