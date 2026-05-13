import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import { Inter } from 'next/font/google'
import { Provider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Renan de Aguiar Modesto | Desenvolvedor Front-End',
  description:
    'Desenvolvedor de Sistemas com mais de 3 anos de experiência em ReactJS, TypeScript, Next.js e React Native, atuando em aplicações web para crédito e investimentos.',
  keywords: [
    'Front-End',
    'Desenvolvedor',
    'React',
    'ReactJS',
    'TypeScript',
    'Next.js',
    'React Native',
    'JavaScript',
    'HTML',
    'CSS'
  ],
  authors: [{ name: 'Renan de Aguiar Modesto' }],
  openGraph: {
    title: 'Renan de Aguiar Modesto | Desenvolvedor Front-End',
    description:
      'Desenvolvedor de Sistemas com mais de 3 anos de experiência em ReactJS, TypeScript, Next.js e React Native, atuando em aplicações web para crédito e investimentos.',
    type: 'website',
    locale: 'pt_BR'
  },
  twitter: {
    card: 'summary',
    title: 'Renan de Aguiar Modesto | Desenvolvedor Front-End',
    description:
      'Desenvolvedor de Sistemas com mais de 3 anos de experiência em ReactJS, TypeScript, Next.js e React Native.'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Provider>{children}</Provider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
