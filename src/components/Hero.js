import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <div className="hero-text">
                    <span>We are a family owned Mediterranean restaurant, </span>
                    <div>
                        <span>focused on traditional recipes served with a modern twist.</span>
                    </div>
                </div>
                <Link to="/booking" className="cta-button">Book a Table</Link>
            </div>
        </section>
    );
};

export default Hero;
