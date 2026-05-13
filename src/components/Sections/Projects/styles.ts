import styled from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

export const Wrapper = styled.section`
  min-height: 100vh;
  padding: 10vh;
  background: #2c2a32;
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  margin: auto;
  scroll-snap-align: start;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 3vh;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #fefefe;
  margin-bottom: 4%;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 8% 0;
  }
`
