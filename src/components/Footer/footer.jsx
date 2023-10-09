import React from 'react'
import './footer.css'
import logo from '../../assets/pf-logo.png'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'><img src={logo}/></a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#exp'>Experience</a></li>
        <li><a href='#cert'>Certifications</a></li>
        <li><a href='#pf'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>

      <div className='footer_socials'>
        <a href='https://instagram.com/may_ur_luv' target='_blank'><AiFillInstagram/></a>
        <a href='https://x.com/may_ur_luv' target='_blank'><BsTwitter/></a>
        <a href='https://www.linkedin.com/in/mayur-vt/' target='_blank'> <AiFillLinkedin/> </a>
      </div>

      <div className='footer_copy'>
        <small>&copy; Mayur Vijay Thakur. All Rights Reserved.</small>
      </div>

    </footer>
  )
}

export default Footer