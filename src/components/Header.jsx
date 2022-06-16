import React, { useState } from 'react'
import logo from '../images/logo.svg'
import ham from '../images/icon-hamburger.svg'
import cerrar from '../images/icon-close-menu.svg'
const Header = () => {

const [mostrarHam, setMostrarHam] = useState(false)

const mostrarMenu = () => {
    setMostrarHam(!mostrarHam)
    document.body.style = 'rgba(0, 0, 0, 0.6)'
}

  return (
    <header className='header'>
        <div className='flex justify-between items-center p-5 md:container md:mx-auto '>
            <img src={logo} alt="Logo" />
            <ul className='barra-desk'>
                <li>About</li>
                <li>Discover</li>
                <li>Get Started</li>
            </ul>
            <img onClick={mostrarMenu} src={mostrarHam ? cerrar : ham} alt="Icon menu ham" id='menuHam' />
        </div>
        {mostrarHam && (
            <div className='menuOculto rounded-lg '>
                <ul className='divide-y divide-slate-200 font-semibold'>
                    <li className='p-4 '>About</li>
                    <li className='p-4 '>Discover</li>
                    <li className='p-4 '>Get Started</li>
                </ul>
            </div>
        )}
        
    </header>
  
  )
}

export default Header