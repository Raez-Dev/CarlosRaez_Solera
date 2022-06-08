import React, { ReactElement } from 'react'

interface MainProps {
  children: ReactElement<any, any>
}

function Main({ children }: MainProps) {
  return (
    <main className='container-fluid mt-3'>
          {children}
    </main>
  )
}

export default Main