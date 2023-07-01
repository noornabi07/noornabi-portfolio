import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Features/Feature';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
// import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Projects></Projects>
            <Resume></Resume>
        </div>
    );
};

export default Home;