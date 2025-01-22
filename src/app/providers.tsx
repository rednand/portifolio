import GlobalStyles from '@/styles/global'

import { PropsWithChildren } from 'react'

export function Provider({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
