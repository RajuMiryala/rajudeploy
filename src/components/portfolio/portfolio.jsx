import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img-1.png'
import IMG2 from '../../assets/img-2.png'
import IMG3 from '../../assets/img 3.png'
import IMG4 from '../../assets/img 4.png'
import IMG5 from '../../assets/img 5.png'
import IMG6 from '../../assets/img 6.png'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>Travel Yaari</h3>
          <div className="portfolio__item-cta">
          <a href="file:///C:/Users/rajum/Downloads/Travel_Yari_Website_UiBrains-master%20(1)/Travel_Yari_Website_UiBrains-master/Travel_Yari/index.html" className='btn'>Github</a>
          <a href="file:///C:/Users/rajum/Downloads/Travel_Yari_Website_UiBrains-master%20(1)/Travel_Yari_Website_UiBrains-master/Travel_Yari/index.html"  className = 'btn btn-primary'
           target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://dribbble.com" className='btn'>Github</a>
          <a href="https://dribbble.com"  className = 'btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      

        <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://dribbble.com" className='btn'>Github</a>
          <a href="https://dribbble.com"  className = 'btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      

        

        
      

      </div>
    </section>
  )
}

export default portfolio