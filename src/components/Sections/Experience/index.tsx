import React from 'react'
import experiences from '../../../data/experience'
import * as S from '../../Wrapper'
import * as Style from './styles'

function parseDescription(text: string): React.ReactNode[] {
  const parts = text.split(/(<a[^>]*>.*?<\/a>)/g)
  return parts.map((part, i) => {
    const match = part.match(/^<a\s+href="([^"]*)"[^>]*>(.*?)<\/a>$/)
    if (match) {
      return (
        <a key={i} href={match[1]} target="_blank" rel="noopener noreferrer">
          {match[2]}
        </a>
      )
    }
    return part
  })
}

export default function Experiences() {
  return (
    <S.Wrapper>
      <Style.Title>Experiência</Style.Title>
      <Style.WrapperExperience>
        {experiences.map((item) => (
          <Style.ContainerExp key={item.company}>
            <Style.ContainerLeft>
              <Style.Date>
                {item.startDate} - {item.endDate}
              </Style.Date>
            </Style.ContainerLeft>
            <Style.ContainerRight>
              <Style.JobTitle>{item.jobTitle}</Style.JobTitle>
              <Style.Company>{item.company}</Style.Company>
              <Style.Descricao>
                {parseDescription(item.description)}
              </Style.Descricao>
            </Style.ContainerRight>
          </Style.ContainerExp>
        ))}
      </Style.WrapperExperience>
    </S.Wrapper>
  )
}
