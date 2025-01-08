import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com'
import socialLinks from '../../data/socialLinks'

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k00d34c', 'template_f9bnw72', form.current, 'b7f_d7neHLOVPo0vW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <MdOutlineEmail/>
            <h4>{socialLinks.email.title}</h4>
            <a href={socialLinks.email.url}>Send Mail</a>
          </article>
          <article className='contact_option'>
          <AiOutlineLinkedin/>  
          <h4>{socialLinks.linkedIn.title}</h4>
          <a href={socialLinks.linkedIn.url} target='_blank'>Send Message</a>
          </article>
          <article className='contact_option'>
          <AiOutlineInstagram/>
            <h4>{socialLinks.instagram.title}</h4>
            <a href={socialLinks.instagram.url} target='_blank'>Send Message</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea type='message' rows='7'  name='message' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>

      </div>

    </section>
  )
}

export default Contact