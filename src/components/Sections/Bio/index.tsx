import React from 'react'
import * as Style from './styles'

export default function Bio() {
  return (
    <Style.Wrapper>
      <div style={{ margin: 'auto', display: 'flex', alignItems: 'center' }}>
        <div>
          <Style.Title>Renan de Aguiar Modesto</Style.Title>
          <Style.Description>Desenvolvedor Front-End</Style.Description>
          <Style.Text>
            Desenvolvedor de Sistemas com experiência na área de Desenvolvimento
            Web / Front-end. Trabalho há mais de 3 anos desenvolvendo aplicações
            web para a área de crédito e investimentos utilizando ReactJS, HTML,
            CSS, JavaScript, TypeScript, React Native e NextJS.
          </Style.Text>
        </div>
      </div>
    </Style.Wrapper>
  )
}
