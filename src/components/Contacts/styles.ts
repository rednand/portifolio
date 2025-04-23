'use client'

import styled from 'styled-components'

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`

export const Tooltip = styled.span`
  visibility: hidden;
  opacity: 0;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 4px 8px;
  position: absolute;
  left: 120%; /* aparece à direita */
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  transition: opacity 0.3s ease-in-out;
  font-size: 1.2rem;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent #333 transparent transparent;
  }
`

export const ContainerNav = styled.nav`
  margin: auto;
  display: flex;
  align-items: baseline;
  right: 5vw;
  top: 88vh;
  position: fixed;
  gap: 1rem;
`

export const ButtonShowContact = styled.nav`
  margin: auto;
  display: flex;
  align-items: baseline;
  left: 10vw;
  top: 91vh;
  position: fixed;
  gap: 1rem;

  &:hover {
    background-color: rgb(44, 46, 45);
    transform: scale(1.2);
    cursor: pointer;
  }
`

export const ContainerNavMobile = styled.nav`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  left: 7vw;
  top: 65vh;
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
