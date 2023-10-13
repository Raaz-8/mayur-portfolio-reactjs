import React from 'react'
import './pf.css'
import img1 from '../../assets/pf-1.png'
import img2 from '../../assets/pf-2.png'
import img3 from '../../assets/pf-3.png'
import img4 from '../../assets/pf-4.png'
import img5 from '../../assets/pf-5.png'


const data=[

  {
    id:1,
    name:'ChitraPat - A Movie Rating Website',
    img:img1,
    github:'https://github.com/Raaz-8/chitrapat',
    demo:'https://chitrapat.vercel.app/'
  },{
    id:2,
    name:'VEDITRUE - Learning Management System',
    img:img2,
    github:'https://github.com/Raaz-8/vediTrue-LMS-by-Mayur',
    demo:'https://gray-alert-salmon.cyclic.app/'
  },{
    id:3,
    name:'ProNix Solutions - Company Website',
    img:img3,
    github:'https://github.com/Raaz-8/',
    demo:'https://pronix.vercel.app/'
  },{
    id:4,
    name:'Netflix Clone',
    img:img4,
    github:'https://github.com/Raaz-8/netflix-clone-by-mayur',
    demo:'https://netflix-clone-by-mayur.vercel.app/'
  },{
    id:5,
    name:'Price Negotiator E-commerce Chatbot System',
    img:img5,
    github:'https://github.com/Raaz-8/NAITRO-Price-Negotiator-Chatbot',
    demo:'https://github.com/Raaz-8/NAITRO-Price-Negotiator-Chatbot'
  }
]


const Pf = () => {
  return (
    <section id='pf'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container pf_container'>
        {
          data.map(({id,img,name,github,demo})=>{
            return (
              <article className="pf_item" key={id}>
                <div className="pf_item-img">
                  <img src={img} />
                </div>
                <h3>{name}</h3>
                <div className="pf_item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })
        }
        
      </div>
    </section>
  )
}

export default Pf
