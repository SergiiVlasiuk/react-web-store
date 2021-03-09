import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <ul className='menu'>
        <li className='menu-item'>
          <Link to='/'>Home page</Link>
        </li>
        <li className='menu-item'>
          <Link to='/products'>Products</Link>
        </li>
        <li className='menu-item'>
          <Link to='/about'>About</Link>
        </li>
        <li className='menu-item'>
          <Link to='/other'>Other</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
