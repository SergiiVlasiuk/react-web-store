import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo/Logo'
import Menu from './menu/Menu'

export const Header = () => {
  return (
    <header className='content'>
      <div className='content-wrap'>
        <div className='navbar-container'>
          <Logo />
          <Menu />
        </div>
      </div>
    </header>
  )
}
// export const Header = () => (
//     <header>
//       <h1>Welcome to header.</h1>
//     </header>
// )
