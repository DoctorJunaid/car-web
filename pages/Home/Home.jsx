import React from 'react';
import './Home.css';
import heroBackground from '../../src/assets/hero-background.png';

function Home() {
  return (
    <section className="home-hero">
      <div className="home-hero-content">
        <h1>Your next car is here.</h1>
        <p>Discover the best cars in the world, test drive, buy, sell and enjoy the ride.</p>
        <button className="btn-primary">Explore Cars</button>
      </div>
      <div className="home-hero-image">
        <img src={heroBackground} alt="Hero Background" />
      </div>
    </section>
  );
}

export default Home;