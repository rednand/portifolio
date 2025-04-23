'use client'

import styled from 'styled-components'

export const ContainerNav = styled.nav`
  margin: auto;
  display: flex;
  align-items: baseline;
  right: 5vw;
  top: 88vh;
  position: fixed;
  gap: 1rem;
`

export const NavLink = styled.button<{ $isProjectVisible?: boolean }>`
  background-color: #2c2a32;
  color: #fefefe;
  padding: 5px 15px;
  border: none;
  display: flex;
  align-items: center;
  border: ${({ $isProjectVisible }) =>
    $isProjectVisible ? '1px solid #fefefe' : 'none'};
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;

  &:hover {
    background-color: #48d8a4;
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid #48d8a4;
  }
`

export const OtherProjects = styled.p`
  color: #fefefe;
`
