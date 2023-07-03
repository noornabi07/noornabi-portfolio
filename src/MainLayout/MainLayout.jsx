import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import FooterBottom from '../components/Footer/FooterBottom';

const MainLayout = () => {
    return (
        <div className='w-full h-auto bg-bodyColor text-lightText'>
            <div className='max-w-screen-xl mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
                <FooterBottom></FooterBottom>
            </div>
        </div>
    );
};

export default MainLayout;