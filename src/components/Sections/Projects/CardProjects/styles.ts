import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 5%;
  justify-content: flex-start;

  @media (max-width: 600px) {
    gap: 10px;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
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

  @media (max-width: 600px) {
    width: 300px;
    padding: 0;
    margin-bottom: 5%;
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: fill;
  border-radius: 8px 8px 0 0;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 414px) {
    width: 80vw;
  }

  @media (max-width: 600px) {
    width: 50vw;
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
