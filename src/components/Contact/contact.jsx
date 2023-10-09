import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com'

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
            <h4>Email</h4>
            <h5>thakur.mayurvcoe@gmail.com</h5>
            <a href='mailto:thakur.mayurvcoe@gmail.com'>Send Message</a>
          </article>
          <article className='contact_option'>
          <AiOutlineInstagram/>
            <h4>Instagram</h4>
            <h5>@may_ur_luv</h5>
            <a href='https://www.instagram.com/may_ur_luv' target='_blank'>Send Message</a>
          </article>
          <article className='contact_option'>
          <AiOutlineWhatsApp/>  
          <h4>Whatsapp</h4>
            <h5>+917385372305</h5>
            <a href='https://api.whatsapp.com/send?phone=7385372305' target='_blank'>Send Message</a>
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