'use client'

import styled from 'styled-components'

export const DivScrollButtons = styled.div<{
  size: number
}>`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: ${(props) => (props.size < 500 ? '10vw' : '5vw')};
  top: ${(props) => (props.size < 500 ? '75vh' : '8vh')};
  position: fixed;
  gap: 1rem;
`

export const ButtonsScrollButton = styled.button<{
  size: 'small' | 'medium' | 'large' | 'large-last'
}>`
  background-color: #2c2a32;
  color: #fefefe;
  padding: 5px 15px;
  text-align: right;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  width: ${(props) => {
    if (props.size === 'small') return '80px'
    if (props.size === 'medium') return '100px'
    if (props.size === 'large') return '120px'
    if (props.size === 'large-last') return '140px'
  }};

  clip-path: ${(props) => {
    if (props.size === 'small')
      return 'polygon(13% 0, 100% 0, 100% 100%, 0 100%)'
    if (props.size === 'medium')
      return 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)'
    if (props.size === 'large')
      return 'polygon(11% 0, 100% 0, 100% 100%, 0 100%)'
    if (props.size === 'large-last')
      return 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)'
  }};

  &:hover {
    background-color: #48d8a4;
  }
`
