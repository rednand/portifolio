import type { Project } from '@/types/data'

const projects: Project[] = [
  {
    title: 'Se Liga, Hein',
    description:
      'Projeto desenvolvido no curso de Desenvolvimento Web Front-End Node da Digital House.',
    link: 'https://se-liga-hein.vercel.app/',
    github: 'https://github.com/nmaia19/se_liga_hein',
    image: '/images/se-liga.png'
  },
  {
    title: 'Aplicativo Web VHS 404',
    description:
      'Aplicativo de lançamentos de filmes de terror desenvolvido durante estágio como desenvolvedor Front-End.',
    link: 'https://vhs404.vercel.app/',
    github: 'https://github.com/rednand/AppVHS404',
    image: '/images/app-vhs404.png'
  },
  {
    title: 'API do Aplicativo Web VHS 404',
    description:
      'API desenvolvida para o aplicativo web VHS 404, criada durante estágio como desenvolvedor Front-End.',
    link: 'https://api-vhs404.vercel.app/',
    github: 'https://github.com/rednand/API-AppVHS404',
    image: '/images/api-vhs404.png'
  },
  {
    title: 'Desafio Final VTEX Hiring Coders 2021',
    description:
      'Landing page criada durante o bootcamp Hiring Coders, que faz a integração da API do VTEX IO com a API da AWS.',
    github: 'https://github.com/rednand/corebiz-store',
    image: '/images/corebiz.png'
  }
]

export default projects
