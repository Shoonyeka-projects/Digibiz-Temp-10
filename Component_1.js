// Component_1.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../json/Comp_1.json'; // Import the JSON data

export default class Component_1 extends Component {
  render() {
    return (
      <section className="case-study">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="sub-heading">Exclusively</h4>
              <h1 className="heading purple">
                <span className="purple">works</span> with <br />Startups and founders
              </h1>
              <div className="swiper-container client-swiper">
                <div className="swiper-wrapper">
                  {data.map((item, index) => (
                    <div key={index} className="swiper-slide client-box">
                      <img src={item.imgSrc} className="client-logo" />
                      <h3 className="text-left title">{item.title}</h3>
                      <p className="text-left tag">{item.tag}</p>
                      <p className="text-left">
                        <Link to="#">Know More &#8594;</Link>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
