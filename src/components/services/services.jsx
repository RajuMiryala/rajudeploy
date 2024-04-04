import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing and maintaining the user interface.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p> Implementing design on mobile websites.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating tools that improve site interaction regardless of the browser.</p>
            </li>

                <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML, CSS, and JavaScript that allow users to access and interact with the site or app.</p>
            </li>

           </ul>
        </article>

        {/* END OF UI/UX */}



        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Corporate. A corporate website is what any startup business needs.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ecommerce websites are most commonly known as online stores.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Portfolio.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Website Development.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Maintenance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-commerce Website Development.</p>
            </li>
           </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}


        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>As the content creator, you will be responsible for creating, reviewing and editing content for the company which will be published in the company's websites and social media pages.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>You will also be responsible for researching on the key SEO terms and implementing them in the content to gain maximum exposure.</p>
            </li>
           </ul>
        </article>

        {/* END OF CONTENT CREATION */}

      </div>
    </section>
  )
}

export default services