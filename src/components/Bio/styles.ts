'use client'

import styled from 'styled-components'

export const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10vh;
  background: linear-gradient(120deg, #2c2a32 57%, #48d8a4 33%);
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  margin: auto;
  scroll-snap-align: start;
`

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 120%;
  padding: 20px;
  width: 70%;
  color: #fefefe;
  font-weight: 400;
  border-left: 10px solid #48d8a4;
`

export const Description = styled.h3`
  font-size: 2.5rem;
  width: 50%;
  padding: 20px;
  color: #fefefe;
  font-weight: 100;
  border-left: 10px solid #48d8a4;
`

export const Text = styled.p`
  font-size: 1.5rem;
  line-height: 150%;
  width: 50%;
  padding: 20px;
  color: #fefefe;
  font-weight: 100;
  border-left: 10px solid #48d8a4;
`
