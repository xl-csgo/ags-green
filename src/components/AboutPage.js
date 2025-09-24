import React from 'react';
import Nav from './Navbar';
import Hero from './career/CareerHero';
import Desc from './landing/CompanyDescription';
import PageCard from './PageCard';
import TeamSection from './TeamSection';
import bg from '../assets/bg.png';
import Footer from './footer';

const AboutPage = () => {
    const heading = (
        <>
            <span className="accent">About</span> <span className="light">AGS Green</span>
        </>
    );

    const text = `AGS Green is committed to sustainable solutions that power businesses and communities. Our mission is to drive innovation in green energy, ensuring a cleaner, healthier planet for future generations.`;

    const bottomStyle = { display: 'none' };

    const desc_text = "AGS Green is an Indian solar energy company specializing in solar rooftops, ground-mounted projects, and custom solutions for farmers. We also offer full-service operations and maintenance for solar installations.";

    return (
        <div>
            <Nav />
            <Hero background={bg} heading={heading} text={text} bottomStyle={bottomStyle} />
            <Desc text={desc_text} />
            <PageCard
                heading="Our Mission"
                content={
                    <>
                        <p>
                            Our mission at AGS Green is to be a driving force in India's clean energy revolution. We are dedicated to designing and deploying a diverse range of solar solutions, including rooftop installations for homes and businesses and large-scale, ground-mounted projects. Beyond these traditional applications, we are committed to empowering the agricultural sector with innovative solar technologies that enhance productivity and sustainability for farmers.
                        </p>

                        <p>
                            We believe our responsibility extends far beyond the initial installation. That's why a core part of our mission is to provide comprehensive, full-service operations and maintenance, ensuring every solar project we touch operates at peak efficiency for decades to come. Through this integrated approach, we aim to not only contribute to a greener India but also to build a more resilient and energy-independent future for all.
                        </p>
                    </>
                }
                theme="blue"
            />
            <PageCard
                heading="Our Purpose"
                content={
                    <>
                        <p>
                            The purpose of AGS Green is to pioneer a cleaner, more sustainable energy future for India. We are driven by the belief that solar power is not just an alternative but the cornerstone of a resilient and prosperous nation.
                        </p>

                        <p>
                            Our purpose is to make this vision a reality by providing cutting-edge solar solutions that are accessible to everyone, from empowering individual homes and businesses to strengthening the country's energy grid with large-scale projects. We exist to drive positive change, mitigate climate impact, and create economic opportunities through reliable and innovative solar technology.
                        </p>
                    </>
                }
                theme="orange"
            />
            
            <TeamSection />
            
            <Footer />
        </div>
    );
};

export default AboutPage;