import React from 'react'
import './about.css'
import Me from '../../assets/abt-img.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi' 
import { VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={Me} alt='abt img'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Internship Experience</h5>
              <small>3+ Months</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2</small>
            </article>
            
          </div>

          <p>Computer Engineer with honors in AIML, 2023 graduate from Savitribai Phule Pune University, with a passion for Web Development and Design. Eager to collaborate on challenging projects and contribute skills in a dynamic environment. Seeking opportunities to apply knowledge and foster innovation in a collaborative setting. <br/>  <br/> <strong>Software Developer | Designer | AIML Enthusiast</strong> </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default about