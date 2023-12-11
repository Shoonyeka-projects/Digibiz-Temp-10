import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid">
          <div className="row footer">
            <div className="col-md-12 text-center">
              <h1>Maria<br /><span>Ferrero</span></h1>
              <ul className="social-links">
                <li>
                  <Link to="/behance">
                    <img src="assets/behance.png" alt="Behance" />
                  </Link>
                </li>
                <li>
                  <Link to="/dribbble">
                    <img src="assets/dribbble.png" alt="Dribbble" />
                  </Link>
                </li>
                <li>
                  <Link to="/twitter">
                    <img src="assets/twitter.png" alt="Twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="/github">
                    <img src="assets/github.png" alt="GitHub" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row sub-footer">
            <div className="col-md-12 text-center">
              <p>
                Designed by <a href="#" target="_blank">@realvjy</a> | Download{' '}
                <a href="http://designerdada.com/free-bootstrap-one-page-portfolio-template/" target="_blank">
                  here
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
