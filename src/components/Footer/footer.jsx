import React from 'react'
import './footer.css'
import logo from '../../assets/pf-logo.png'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import socialLinks from '../../data/socialLinks'
import { AiFillHeart } from 'react-icons/ai'

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
        <a href={socialLinks.instagram.url} target='_blank'><AiFillInstagram/></a>
        <a href={socialLinks.X.url} target='_blank'><BsTwitter/></a>
        <a href={socialLinks.linkedIn.url} target='_blank'> <AiFillLinkedin/> </a>
      </div>

      <div className='footer_copy'>
        <small>Made with <AiFillHeart/> by Mayur.</small>
      </div>

    </footer>
  )
}

export default Footer