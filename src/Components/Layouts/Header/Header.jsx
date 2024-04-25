import React from 'react'
import './Header.css'
import { Logo } from '../../UI/LogoType/LogoType'
import { Navbar } from '../../UI/Navbar/Navbar'

export const Header = () => {
  return ( 
    <header className='header-page'>
      <Logo/>
      <Navbar/>
    </header>
    
  )
}
