'use client'

import styled from 'styled-components'

export const DivScrollButtons = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: 5vw;
  top: 43vh;
  position: fixed;
  gap: 1rem;
`

export const ButtonsScrollButton = styled.button<{
  size: 'small' | 'medium' | 'large'
}>`
  border: 1px solid #48d8a4;
  background-color: #2c2a32;
  color: #fefefe;
  padding: 5px 20px;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  width: ${(props) => {
    if (props.size === 'small') return '120px'
    if (props.size === 'medium') return '140px'
    if (props.size === 'large') return '160px'
  }};

  clip-path: ${(props) => {
    if (props.size === 'small')
      return 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)'
    if (props.size === 'medium')
      return 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)'
    if (props.size === 'large')
      return 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)'
  }};

  &:hover {
    background-color: #48d8a4;
  }
`
