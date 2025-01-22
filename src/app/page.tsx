'use client'

import Experiences from '@/components/Experience'
import Bio from '../components/Bio'
import About from '@/components/About/about'
import styled from 'styled-components'
import { MutableRefObject, useRef } from 'react'
import ScrollButtons from '@/components/ScrollButtons'

const ScrollContainer = styled.main`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`

export default function Home() {
  const bioRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <ScrollContainer>
        <ScrollButtons
          bioRef={bioRef}
          aboutRef={aboutRef}
          experiencesRef={experiencesRef}
        />
        <div ref={bioRef}>
          <Bio />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={experiencesRef}>
          <Experiences />
        </div>
      </ScrollContainer>
    </div>
  )
}
