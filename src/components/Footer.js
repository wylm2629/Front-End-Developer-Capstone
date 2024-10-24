import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section-1">
                    <h2>Little Lemon</h2>
                    <p>Chicago</p>
                </div>
                <div className="footer-section-2">
                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@littlelemon.com</p>
                        <p>Address: 123 Main St, Chicago, IL 60601</p>
                    </div>
                    <div className="footer-column">
                        <h3>Operation</h3>
                        <p>Mon-Fri: 11am - 10pm</p>
                        <p>Sat-Sun: 10am - 11pm</p>
                    </div>
                    <div className="footer-column">
                        <h3>Welcome to Try</h3>
                        <p>Come and experience our delicious cuisine and warm atmosphere. We look forward to serving you!</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
