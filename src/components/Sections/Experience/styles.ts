'use client'

import styled from 'styled-components'

export const Title = styled.h3`
  font-size: 2.5rem;
  line-height: 120%;
  width: 70%;
  color: #fefefe;
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-weight: 700;
  margin-bottom: 3%;

  @media (max-width: 600px) {
    font-size: 2rem;
    margin: 8% 0;
  }
`

export const WrapperExperience = styled.div`
  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    overflow: auto;
  }
`
export const ContainerExp = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;

  @media (max-width: 600px) {
    margin-right: 6%;
    width: 100%;
    display: block;
  }
`

export const ContainerLeft = styled.div`
  width: 20%;
  padding-right: 2%;

  @media (max-width: 600px) {
    width: 100vw;
    padding-right: 0%;
  }
`

export const ContainerRight = styled.div`
  width: 80%;
  padding-top: 1%;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 3%;
  }
`

export const JobTitle = styled.h3`
  font-size: 2rem;
  color: #fefefe;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin: 2% 0;
  }
`

export const Company = styled.h4`
  font-size: 1.5rem;
  color: #fefefe;
  padding: 1% 0;
  font-weight: 400;

  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 1rem;
  }
`

export const Date = styled.h5`
  font-size: 1.2rem;
  color: #fefefe;
  border-top: 10px solid #48d8a4;
  font-weight: 400;
  padding-top: 1%;

  @media (max-width: 600px) {
    font-size: 1.1rem;
    padding-top: 3%;
  }
`

export const Descricao = styled.p`
  font-size: 1.2rem;
  color: #fefefe;
  font-weight: 400;

  a {
    color: #48d8a4;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    padding-bottom: 3%;
  }
`
