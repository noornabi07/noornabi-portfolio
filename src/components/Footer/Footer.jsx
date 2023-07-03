import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/white-img.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="w-full py-10 h-auto border-b-[1px] border-b-black grid grid-cols-2 lg:grid-cols-4 bg-gray-700 px-4 justify-between">
            <div className="w-full h-full flex flex-col gap-8">
                <img className="w-32 mx-auto h-32 border-blue-600 outline-gray-500 rounded-full" src={logo} alt="logo" />
                <div className="flex gap-4 justify-center">
                    <span className="text-2xl font-bold text-white hover:text-red-400 hover:scale-150 duration-300">
                        <Link to="https://www.facebook.com/mdnoornabiislamNK" target='_blank'>
                            <FaFacebookF />
                        </Link>
                    </span>
                    <span className="text-2xl font-bold text-white hover:text-red-400 hover:scale-150 duration-300">
                        <Link to="https://twitter.com/MDNurna56749656" target='_blank'>
                            <FaTwitter />
                        </Link>
                    </span>
                    <span className="text-2xl font-bold text-white hover:text-red-400 hover:scale-150 duration-300">
                        <Link to="https://www.linkedin.com/in/md-noornabi-islam-0a239821b/" target='_blank'>
                            <FaLinkedinIn />
                        </Link>
                    </span>
                </div>
            </div>
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-designColor tracking-wider">
                    Quick Link
                </h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            About
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            Portfolio
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            Services
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            Blog
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            Contact
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-designColor tracking-wider">
                    RESOURCES
                </h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            Authentication
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            System Status
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            Terms of Service
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            Pricing
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            Over Right
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-designColor tracking-wider">
                    DEVELOPERS
                </h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            Documentation
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            Authentication
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            API Reference
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            Support
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                            Open Source
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;