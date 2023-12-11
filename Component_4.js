import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import contactData from '../json/Comp_4.json';

export default class Component_4 extends Component {
  render() {
    return (
      <section className="contact-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>{contactData.bannerText}</h1>
              <Link to={contactData.contactLink} className="btn btn-lg btn-primary">
                {contactData.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
