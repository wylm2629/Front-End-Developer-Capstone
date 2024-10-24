import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
            <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Little Lemon restaurant interior" />
                </div>
                <div className="about-text">
                    <h2>About</h2>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                    Our story began with a love for food and a passion for sharing it with others. Our family has been cooking traditional Mediterranean dishes for generations, and we're thrilled to bring that same love and care to Little Lemon Chicago. Our menu is inspired by the flavors and aromas of Greece, Turkey, and Lebanon, with a modern twist that's sure to delight your taste buds.
                    </p>
                    <div className="cta-section">
                    <Link to="/booking" className="cta-button">Reserve a Table</Link>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;
