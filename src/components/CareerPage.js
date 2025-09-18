import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import Hero from './career/CareerHero';
import CareerText from './career/CareerText';
import JobList from './JobList';
import bg from '../assets/bg.png';
import PageCard from './PageCard';

const CareerPage = () => {
        const content = (
                <>
                    <p>
                        We believe that our most valuable resource is our people. As we continue to expand our mission to bring sustainable solar energy to every corner of India, we are seeking talented and dedicated individuals to join our team.
                    </p>
                    <br />
                    <p>
                        If you are a motivated professional with a passion for renewable energy and a desire to make a real impact, we want to hear from you. Explore our current job openings on our website and become a part of India's green energy future.
                    </p>
                </>
        );

        return (
                <div>
                        <Navbar />
                                                <Hero
                                                        background={bg}
                                                        heading={(
                                                                <>
                                                                        <span className="accent">Opportunities</span> <span className="light">At</span><br />
                                                                        <span className="company">AGS Green</span>
                                                                </>
                                                        )}
                                                        text={"We believe that our most valuable resource is our people. As we continue to expand our mission to bring sustainable solar energy to every corner of India, we are seeking talented and dedicated individuals to join our team."}
                                                        bottomStyle={{ display: 'none' }}
                                                />
                        <PageCard heading={"Our Opportunities"} content={content} theme={'blue'} />
                        <CareerText />
                        <JobList />
                        <Footer />
                </div>
        );
};

export default CareerPage;