'use client'

import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: #2c2a32;
  height: 100vh;
  padding: 10vh;
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  margin: auto;
  scroll-snap-align: start;

  @media (max-width: 600px) {
    padding: 5vh;
  }
`

export const Description = styled.h3`
  line-height: 120%;
  margin-top: 7%;
  width: 70%;
  color: #fefefe;
  font-size: 2.5rem;
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-weight: 700;
  margin-bottom: 3%;

  @media (max-width: 600px) {
    font-size: 2rem;
    margin: 8% 0;
  }
`

export const Text = styled.p`
  font-size: 1.7rem;
  line-height: 150%;
  width: 60%;
  padding-bottom: 50px;
  color: #fefefe;
  font-weight: 100;
  border-bottom: 10px solid #48d8a4;

  @media (max-width: 600px) {
    font-size: 1rem;
    width: 100%;
  }
`
