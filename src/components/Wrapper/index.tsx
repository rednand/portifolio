'use client'

import styled from 'styled-components'

export const Wrapper = styled.section`
  height: 100vh;
  padding: 10vh;
  background: #2c2a32;
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  margin: auto;
  scroll-snap-align: start;

  @media (max-width: 600px) {
    padding: 3vh;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    height: 110vh;
  }
`
