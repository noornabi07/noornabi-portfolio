import React from 'react';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='w-full h-auto bg-bodyColor text-lightText'>
            <div className='max-w-screen-xl mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                {/* <Footer></Footer> */}
            </div>
        </div>
    );
};

export default MainLayout;