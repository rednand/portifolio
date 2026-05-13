import styled from 'styled-components'
import Image from 'next/image'
import { breakpoints } from '@/styles/breakpoints'

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 5%;
  justify-content: flex-start;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 10px;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    overflow: auto;
    height: 90vh;
  }
`

export const Card = styled.div`
  padding: 20px;
  width: 300px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-bottom: 5px solid #48d8a4;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 300px;
    padding: 0;
    margin-bottom: 5%;
  }
`

export const CardImage = styled(Image)`
  width: 100% !important;
  height: 150px !important;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    width: 80vw !important;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 50vw !important;
  }
`

export const CardContent = styled.div`
  padding: 10px;
`

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #fefefe;
  margin: 5% 0;

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;

    &:hover {
      color: #48d8a4;
    }
  }
`

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #cccccc;
  line-height: 1.5;
`

export const CardButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`
export const CardButton = styled.a`
  background: none;
  border: none;
  cursor: pointer;
  color: none;

  &:hover {
    color: #48d8a4;
    display: block;
  }
`
