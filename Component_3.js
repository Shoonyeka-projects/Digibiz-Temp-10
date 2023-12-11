import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import statsData from '../json/Comp_3.json';

export default class Component_3 extends Component {
  render() {
    return (
      <section className="stats">
        <div className="container">
          <div className="row">
            {statsData.stats.map((stat, index) => (
              <div className="col-md-4 text-center stat-box" key={index}>
                <h1 className={index === 1 ? 'blue counter' : index === 2 ? 'pink' : 'purple'}>
                  {index === 1 ? stat.value : <span className="counter">{stat.value}</span>}
                </h1>
                <h3>{stat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
