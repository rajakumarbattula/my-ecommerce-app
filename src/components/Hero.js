import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My E-Commerce Store</h1>
        <p>Discover the best products at unbeatable prices.</p>
        <a href="/products" className="cta-button">Shop Now</a>
      </div>
    </section>
  );
};

export default Hero;

