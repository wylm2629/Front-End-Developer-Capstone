import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='App-header'>
            <div className="logo">
                <Link to="/" className="home-link">
                    <h1>Little Lemon</h1>
                </Link>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/" className="home-link">Home</Link></li>
                    <li><a href="/#menu">Menu</a></li>
                    <li><a href="/#testimonials">Testimonials</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><Link to="/booking">Booking</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
