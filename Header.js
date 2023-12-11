import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  state = {Menu : true}

  //Menu | open close
  menu = () => {this.setState({Menu : !this.state.Menu})};

  render() {
    return (
      <header className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-6 col-xs-12">
              <nav>
                <div id="menu-toggle" className={this.state.Menu === true ? 'open' : null} onClick={this.menu}>
                  <div className="hamburger">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </div>
                  <div className="cross">
                    <span className="line"></span>
                    <span className="line"></span>
                  </div>
                </div>
                <ul className={this.state.Menu === true ? "main-nav show-it" : "main-nav"}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
              <div className="hero-text">
                <h1><span>Hi, I am</span><br />Maria Ferrero.</h1>
                <h3>Freelance designer from Melbourne</h3>
                <Link to="/know-more" className="btn btn-lg btn-primary">Know More</Link>
                <ul className="social-links">
                  <li className="label">Join me here</li>
                  <li><Link to="/behance"><img src="assets/behance.png" alt="Behance" /></Link></li>
                  <li><Link to="/dribbble"><img src="assets/dribbble.png" alt="Dribbble" /></Link></li>
                  <li><Link to="/twitter"><img src="assets/twitter.png" alt="Twitter" /></Link></li>
                  <li><Link to="/github"><img src="assets/github.png" alt="GitHub" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
