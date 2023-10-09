import React from 'react'
import './exp.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Exp = () => {
  return (
    <section id='exp'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container exp_container'>
        <div className='exp_lang'>
          <h3>Programming Languages</h3>
          <div className='exp_content'>
            <article className='exp_details'>
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>Python</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>C++</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>JavaScript</h4>
              <small>Basic</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>HTML</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>CSS</h4>
              <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='exp_db'>
          <h3>Frameworks and Databases</h3>
          <div className='exp_content'>
            <article className='exp_details'>
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>ReactJs</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>SQL</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>Flask</h4>
              <small>Basic</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>MongoDB</h4>
              <small>Basic</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>Tailwind CSS</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className='exp_details'>
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>NodeJs</h4>
              <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exp