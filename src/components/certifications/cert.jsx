import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './certs.css'

const techCert=[

  {
    id:1,
    name:'Artificial Intelligence Training from Internship Studio'
  },{
    id:1,
    name:'Software development Training from Trainity'
  },{
    id:1,
    name:'Web Developement Training from Internshala'
  },{
    id:1,
    name:'Bootcamp on Javascript and ReactJs from ShapeAI'
  }
]

const softCert=[

  {
    id:1,
    name:'Barclays LifeSkills Program conducted by GTT Foundation'
  },{
    id:1,
    name:'President of Skilled and Progressive Association of Computer Engineering'
  }
]

const Cert = () => {
  return (
    <section id='cert'>
      <h5>My</h5>
      <h2>Certifications</h2>

      <div className='container cert_container'>
        <article className='cert'>
          <div className='cert_head'>
            <h3>Technical Skills</h3>
          </div>
          <ul className='cert_list'>
            {
              techCert.map(({id,name})=>{
                return (
                  <li key={id}>
                    <BiCheck className="cert_list-icon" />
                    <p>{name}</p>
                  </li>
                );
              })
            }
          </ul>
        </article>

        <article className='cert'>
          <div className='cert_head'>
            <h3>Soft Skills</h3>
          </div>
          <ul className='cert_list'>
            {
              softCert.map(({id,name})=>{
                return (
                  <li key={id}>
                    <BiCheck className="cert_list-icon" />
                    <p>{name}</p>
                  </li>
                );
              })
            }
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Cert