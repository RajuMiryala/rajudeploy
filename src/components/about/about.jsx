import React from 'react'
import './about.css'
import ME from '../../assets/butterfly.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me"/>
          </div>

        </div>
        <div className="about__content">
            <div className="about_cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1 Year Working</small>
                
              </article>
              <br />
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>3 worldwide</small>
              </article>
            <br />
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>4 Completed</small>
              </article>
            
            </div>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque eos voluptatem eius doloreme
              maiories nihil ducimus at rem ullam reprehenderit quidem quia deserunt,
              molestiae,eligendi amet repellat molestais quos totam.
            </p> */}
            <br />
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default about