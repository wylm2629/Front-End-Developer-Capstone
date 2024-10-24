<<<<<<< HEAD
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
=======
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
>>>>>>> b00288b52f058a0e290cd55204b98fe38618c6a4
