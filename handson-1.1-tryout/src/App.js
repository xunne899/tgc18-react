import React from 'react'; // const React = require('react)
import'./style.css'


export default function App(){

  return(
    <React.Fragment>
   <body>
    <nav>
      <ul id="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#">Our Menu</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
    <section id="hero">
      <div id="cta">
        <a href="#">
          Make a Booking
        </a>
      </div>
    </section>
    <section id="about-us">
      <div className="content">
        <h1>Cute dogs for adoption</h1>
      </div>
    </section>
  </body>
    </React.Fragment>
  )
}

