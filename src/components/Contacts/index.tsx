'use client'

import { contacts } from '../../data/contacts'
import * as Style from './styles'
import { FiGithub } from 'react-icons/fi'
import { CiLinkedin } from 'react-icons/ci'
import { MdOutlineEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { RiContactsBook3Fill } from 'react-icons/ri'
import { useWindowSize } from '@/hooks'
import { useState } from 'react'

export default function Contacts({
  isProjectsVisible
}: {
  isProjectsVisible: boolean
}) {
  const [isShowingContact, setIsShowingContact] = useState(false)
  const { width } = useWindowSize()

  return width < 600 ? (
    <>
      <Style.ButtonShowContact>
        <Style.TooltipWrapper>
          <RiContactsBook3Fill
            onClick={() => setIsShowingContact(!isShowingContact)}
            size={20}
            color="white"
            style={{ cursor: 'pointer' }}
          />
          <Style.Tooltip>Contato</Style.Tooltip>
        </Style.TooltipWrapper>
      </Style.ButtonShowContact>
      {isShowingContact && (
        <Style.ContainerNavMobile>
          {contacts.map((contact, index) => {
            const IconComponent =
              contact.name === 'Github'
                ? FiGithub
                : contact.name === 'Linkedin'
                ? CiLinkedin
                : contact.name === 'Email'
                ? MdOutlineEmail
                : contact.name === 'Telefone'
                ? FiPhone
                : null

            return (
              <Style.NavLink
                $isProjectVisible={false}
                key={index}
                as="a"
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {IconComponent && <IconComponent size={20} />}
              </Style.NavLink>
            )
          })}
        </Style.ContainerNavMobile>
      )}
    </>
  ) : (
    <Style.ContainerNav>
      {isProjectsVisible && (
        <Style.OtherProjects>Outros projetos em:</Style.OtherProjects>
      )}
      {contacts.map((contact, index) => {
        const IconComponent =
          contact.name === 'Github'
            ? FiGithub
            : contact.name === 'Linkedin'
            ? CiLinkedin
            : contact.name === 'Email'
            ? MdOutlineEmail
            : contact.name === 'Telefone'
            ? FiPhone
            : null

        return (
          <Style.NavLink
            $isProjectVisible={index === 0 && isProjectsVisible}
            key={index}
            as="a"
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {IconComponent && <IconComponent size={20} />}
          </Style.NavLink>
        )
      })}
    </Style.ContainerNav>
  )
}
