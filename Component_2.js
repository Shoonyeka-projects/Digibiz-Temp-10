import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'; // Import Swiper styles
import testimonialData from '../json/Comp_2.json';

export default class Component_2 extends Component {
  componentDidMount() {
    // Initialize Swiper after the component has mounted
    new Swiper('.testimonial-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  render() {
    return (
      <section className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="sub-heading">Happy</h4>
              <h1 className="heading pink">
                <span className="pink">Client's</span> hello <br />testimonials
              </h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              {/* Swiper */}
              <div className="swiper-container testimonial-swiper">
                <div className="swiper-wrapper">
                  {testimonialData.testimonials.map((testimonial, index) => (
                    <div className="swiper-slide testimonial-box yellow" key={index}>
                      <h1>{testimonial.title}</h1>
                      <p>{testimonial.content}</p>
                      <div className="text-right">
                        <p className="name">- {testimonial.author}</p>
                        <p className="designation">{testimonial.designation}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Add Navigation Buttons */}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                {/* Add Pagination */}
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
