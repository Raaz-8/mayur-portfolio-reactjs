import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import socialLinks from '../../data/socialLinks'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href={socialLinks.linkedIn.url} target='_blank'> <BsLinkedin/> </a>
        <a href={socialLinks.github.url} target='_blank'> <FaGithub/></a>
        <a href={socialLinks.X.url} target='_blank'> <BsTwitter/> </a>
    </div>
  )
}

export default HeaderSocials