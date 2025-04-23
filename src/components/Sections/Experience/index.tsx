import React from 'react'
import experiences from '../../../data/experience'
import * as S from '../../Wrapper'
import * as Style from './styles'

export default function Experiences() {
  return (
    <S.Wrapper>
      <Style.Title>Experiência</Style.Title>
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
            <Style.Descricao
              dangerouslySetInnerHTML={{ __html: item.descricao }}
            />
          </Style.ContainerRight>
        </Style.ContainerExp>
      ))}
    </S.Wrapper>
  )
}
