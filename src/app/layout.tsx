'use client'

import StyledComponentsRegistry from '@/lib/registry'
import { Inter } from 'next/font/google'
import { Provider } from './providers'
import { QueryClient, QueryClientProvider } from 'react-query'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
          <StyledComponentsRegistry>
            <Provider>{children}</Provider>
          </StyledComponentsRegistry>
        </body>
      </html>
    </QueryClientProvider>
  )
}
