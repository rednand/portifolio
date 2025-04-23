'use client'

import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #fefefe;
  margin-bottom: 5%;
`

export const ContainerExp = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
`

export const ContainerLeft = styled.div`
  width: 20%;
  padding-right: 2%;
`

export const ContainerRight = styled.div`
  width: 80%;
  padding-top: 1%;
`

export const JobTitle = styled.h3`
  font-size: 2rem;
  color: #fefefe;
`

export const Company = styled.h4`
  font-size: 1.5rem;
  color: #fefefe;
  padding: 1% 0;
  font-weight: 400;
`

export const Date = styled.h5`
  font-size: 1.2rem;
  color: #fefefe;
  border-top: 10px solid #48d8a4;
  font-weight: 400;
  padding-top: 1%;
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
`
