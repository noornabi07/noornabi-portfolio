import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
        </div>
    );
};

export default Home;