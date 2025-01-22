import StyledComponentsRegistry from '@/lib/registry'
import { Inter } from 'next/font/google'
import { Provider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Provider>{children}</Provider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
