import projects from '../../../../data/projects'
import * as Style from './styles'
import { FiGithub } from 'react-icons/fi'
import { useState } from 'react'

const CardProjects = () => {
  const [showIconGithub, setShowIconGithub] = useState<null | number>(null)

  return (
    <Style.ContainerCard data-testid="card-projects">
      {projects.map((project, index) => (
        <Style.Card
          key={index}
          onMouseEnter={() => setShowIconGithub(index)}
          onMouseLeave={() => setShowIconGithub(null)}
        >
          <Style.CardImage src={project.image} alt={project.projeto} />
          <Style.CardContent>
            <Style.CardTitle>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.projeto}
                </a>
              ) : (
                project.projeto
              )}
            </Style.CardTitle>
            <Style.CardDescription>{project.descricao}</Style.CardDescription>
          </Style.CardContent>
          {showIconGithub === index && (
            <Style.CardButtonContainer>
              <Style.CardButton
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size={15} color="#48d8a4" />
              </Style.CardButton>
            </Style.CardButtonContainer>
          )}
        </Style.Card>
      ))}
    </Style.ContainerCard>
  )
}

export default CardProjects
