'use client'

import styled from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

export const Wrapper = styled.section`
  height: 100vh;
  padding: 10vh;
  background: #2c2a32;
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  margin: auto;
  scroll-snap-align: start;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 3vh;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    height: 110vh;
  }
`
