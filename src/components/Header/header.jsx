import React from 'react'
import CTA from './cta'
import './header.css'
import Me from '../../assets/user-1.png'
import HeaderSocials from './HeaderSocials'


const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Mayur Thakur</h1>
        <h5 className='text-light'>Computer Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'> 
          <img src={Me} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default header