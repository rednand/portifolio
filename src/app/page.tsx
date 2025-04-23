'use client'

import Contacts from '@/components/Contacts'
import ScrollButtons from '@/components/ScrollButtons'
import About from '@/components/Sections/About/about'
import Experiences from '@/components/Sections/Experience'
import Projects from '@/components/Sections/Projects'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Bio from '../components/Sections/Bio'

const ScrollContainer = styled.main`
  height: 100vh;
  background: #2c2a32;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`

export default function Home() {
  const bioRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [isProjectsVisible, setIsProjectsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === projectsRef.current) {
            setIsProjectsVisible(entry.isIntersecting)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current)
      }
    }
  }, [])

  return (
    <div>
      <ScrollContainer>
        <ScrollButtons
          bioRef={bioRef}
          aboutRef={aboutRef}
          experiencesRef={experiencesRef}
          projectsRef={projectsRef}
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
        <div ref={projectsRef}>
          <Projects />
        </div>
      </ScrollContainer>
      <Contacts isProjectsVisible={isProjectsVisible} />
    </div>
  )
}
