import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className = 'contact__option-icon' />
              <h4>Email</h4>
              <h5>rajumiryala812@gmail.com</h5>
              <a href="mailto:rajumiryala812@gmail.com" target="__blank">Send a message</a>
            </article>

            <article className="contact__option">
              <MdOutlineEmail className = 'Whatsapp__option-icon' />
              <h4>Whatsapp</h4>
              <h5>7036242175</h5>
              <a href="https://web.whatsapp.com/" target= "__blank">Send a Message</a>
            </article>


        </div>

          {/* END OF CONTACT OPTIONS */}
          <form action="" >
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type = "email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>

      </div>
    
    </section>
  )
}

export default contact