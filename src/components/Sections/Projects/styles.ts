import styled from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #fefefe;
  margin-bottom: 4%;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 8% 0;
  }
`
