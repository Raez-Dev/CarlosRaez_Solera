import React from 'react'
import { Header } from './header'
import { Main } from './main'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <Main>        
        <Outlet />
      </Main>
    </>
  )
}

export default Layout