import experiences from '../../data/experience'
import * as S from '../Wrapper'
import * as Style from './styles'

export default function Experiences() {
  return (
    <S.Wrapper>
      <Style.Title>Experiência</Style.Title>
      {experiences.map((item) => (
        <div key={item.company}>
          <Style.JobTitle>{item.jobTitle}</Style.JobTitle>
          <Style.Company>{item.company}</Style.Company>
          <Style.Date>
            {item.startDate} - {item.endDate}
          </Style.Date>
        </div>
      ))}
    </S.Wrapper>
  )
}
