import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import Hero from './career/CareerHero';
import bg from '../assets/bg.png';

const ArticlePage = () => {
    const heading = 'Opportunities At AGS Green';
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla est sapien, eget blandit libero semper sed.';

    return (
        <div>
            <Navbar />
            <Hero background={bg} heading={heading} text={text} />
            <Footer />
        </div>
    );
};

export default ArticlePage;