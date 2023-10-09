import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/mayur-vt/' target='_blank'> <BsLinkedin/> </a>
        <a href='https://github.com/Raaz-8' target='_blank'> <FaGithub/></a>
        <a href='https://x.com/may_ur_luv' target='_blank'> <BsTwitter/> </a>

    </div>
  )
}

export default HeaderSocials