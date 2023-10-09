import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {PiCertificateBold} from 'react-icons/pi'
import { useState } from 'react'
import {AiFillProject} from 'react-icons/ai'

const Nav = () => {

  const [activeNav,setActiveNav]=useState('#')

  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href='#exp' onClick={()=>setActiveNav('#exp')} className={activeNav==='#exp'?'active':''}><BiBook/></a>
      <a href='#cert' onClick={()=>setActiveNav('#cert')} className={activeNav==='#cert'?'active':''}><PiCertificateBold/></a>
      <a href='#pf' onClick={()=>setActiveNav('#pf')} className={activeNav==='#pf'?'active':''}><AiFillProject/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav