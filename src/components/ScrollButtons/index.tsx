'use client'

import { MutableRefObject } from 'react'
import * as Style from './styles'
import { useWindowSize } from '@/hooks'

interface ScrollButtonsProps {
  bioRef: MutableRefObject<HTMLDivElement | null>
  aboutRef: MutableRefObject<HTMLDivElement | null>
  experiencesRef: MutableRefObject<HTMLDivElement | null>
  projectsRef: MutableRefObject<HTMLDivElement | null>
}

export default function ScrollButtons({
  bioRef,
  aboutRef,
  experiencesRef,
  projectsRef
}: ScrollButtonsProps) {
  const { width } = useWindowSize()

  const scrollToBio = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Style.DivScrollButtons size={width}>
      <Style.ButtonsScrollButton
        size="small"
        onClick={() => scrollToBio(bioRef)}
      >
        Bio
      </Style.ButtonsScrollButton>
      <Style.ButtonsScrollButton
        size="medium"
        onClick={() => scrollToBio(aboutRef)}
      >
        Sobre
      </Style.ButtonsScrollButton>
      <Style.ButtonsScrollButton
        size="large"
        onClick={() => scrollToBio(experiencesRef)}
      >
        Experiências
      </Style.ButtonsScrollButton>
      <Style.ButtonsScrollButton
        size="large-last"
        onClick={() => scrollToBio(projectsRef)}
      >
        Projetos
      </Style.ButtonsScrollButton>
    </Style.DivScrollButtons>
  )
}
