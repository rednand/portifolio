import { render, screen, fireEvent } from '@testing-library/react'
import ScrollButtons from '.'
import React from 'react'

const createRefMock = (): React.RefObject<HTMLDivElement> => {
  return {
    current: {
      scrollIntoView: jest.fn()
    } as unknown as HTMLDivElement
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
        bioRef={bioRef}
        aboutRef={aboutRef}
        experiencesRef={experiencesRef}
        projectsRef={projectsRef}
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
    if (bioRef.current) {
      expect(bioRef.current.scrollIntoView).toHaveBeenCalled()
    }
    fireEvent.click(screen.getByText(/sobre/i))
    if (aboutRef.current) {
      expect(aboutRef.current.scrollIntoView).toHaveBeenCalled()
    }

    fireEvent.click(screen.getByText(/experiências/i))
    if (experiencesRef.current) {
      expect(experiencesRef.current.scrollIntoView).toHaveBeenCalled()
    }

    fireEvent.click(screen.getByText(/projetos/i))

    if (projectsRef.current) {
      expect(projectsRef.current.scrollIntoView).toHaveBeenCalled()
    }
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
