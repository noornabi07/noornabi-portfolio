import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Features/Feature';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import BestSkills from '../BestSkills/BestSkills';
// import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestSkills></BestSkills>
            <Feature></Feature>
            <Projects></Projects>
            <Resume></Resume>
            <Contact></Contact>
        </div>
    );
};

export default Home;