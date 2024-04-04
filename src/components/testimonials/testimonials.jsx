import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/climate.jpg'
import AVTR2 from '../../assets/climate1.jpg'
import AVTR3 from '../../assets/climate2.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Education</h5>
      <h2>Qualification</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
           
      >
        <SwiperSlide   className="testimonial">
          <div className="client__avatar">
            <img src ={AVTR1} alt="Avatar One"/>
          </div>
            <small className='client__review'>
            <div className='qualification'>
              <h5 class="text-uppercase bg-white text-dark py-2 rounded-pill"id="Education">Education</h5>
              <ul>
              <li class="list-item">Princeton College of IT— MCA</li>
              <p>
							2018-22
							Aggregate:65%
						</p>
            <li class="list-item">Jagruti Degree & PG College— BSc(Computers)</li>
						<p>
							2015-18
							Aggregate:69%
						</p>
            <li class="list-item">Ekashila Junior College— MPC</li>
						<p>
							2013-15
							Aggregate:75.1%

						</p>
						<li class="list-item">Maharshi Vidya Mandir— (1-10)</li>
						 <p>
						 	2013
						 	Aggregate :8.8 GPA 

						 </p>		
              </ul>
              </div>
            </small>
          
        </SwiperSlide>

       
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src ={AVTR2} alt="Avatar One"/>
          </div>
            <h5 className='client__name'>Awards</h5>
            <small className='client__review'>
              <ul>
                <li>I got the best Student Award 2 times in my College.</li>
                <li>I got the best Performance Award in my College.</li>
                <li>I participated in more cultural activities in my School.</li>
                <li>I certified DDU On Hardware and Networking course.</li>
              </ul>
            </small>
          
        </SwiperSlide>
 </Swiper>
    </section>
  )
}

export default testimonials