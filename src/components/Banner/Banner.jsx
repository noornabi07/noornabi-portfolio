import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { AiFillGithub } from "react-icons/Ai";
import { IoLogoJavascript } from "react-icons/Io";
import { BiLogoMongodb } from "react-icons/Bi";
import { Link } from "react-router-dom";
import banner from '../../assets/banner1.png'

const Banner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Frontend Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <section id='home' className="pt-8 pb-10 flex justify-between items-center font-titleFont border-b-[1px] border-b-black">
            {/* Left Banner part */}
            <div className='w-1/2 flex flex-col gap-20'>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                    <h1 className='text-6xl font-bold text-white'>
                        Hi, I'm
                        <span className='text-designColor capitalize'> Noornabi</span></h1>
                    <h2 className='text-4xl font-bold text-white'>
                        a <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="#ff014f"
                        />
                    </h2>
                    <p className='text-base font-bodyFont leading-6 tracking-wide'>Passionate Frontend Developer with strong teamwork skills. In addition to my
                        technical skills, I possess excellent communication and organizational skills, allowing me to
                        effectively manage my time and prioritize tasks. Dedicated to continuous learning and staying
                        up-to-date with the latest technologies and trends in development</p>
                </div>

                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
                        <div className="flex">
                            <span className="bannerIcon">
                                <Link to="https://www.facebook.com/mdnoornabiislamNK" target='_blank'><FaFacebookF /></Link>

                            </span>
                            <span className="bannerIcon">
                                <Link to="https://twitter.com/MDNurna56749656" target='_blank'> <FaTwitter /></Link>
                            </span>
                            <span className="bannerIcon">
                                <Link to="https://www.linkedin.com/in/md-noornabi-islam-0a239821b/" target='_blank'><FaLinkedinIn /></Link>
                            </span>
                            <span className="bannerIcon">
                                <Link to="https://github.com/noornabi07" target='_blank'><AiFillGithub></AiFillGithub></Link>
                            </span>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-base uppercase font-titleFont mb-4'>Best Skills On</h2>
                        <div className="flex">
                            <span className="bannerIcon">
                                <FaReact />
                            </span>
                            <span className="bannerIcon">
                                <IoLogoJavascript></IoLogoJavascript>
                            </span>
                            <span className="bannerIcon">
                                <FaNodeJs></FaNodeJs>
                            </span>
                            <span className="bannerIcon">
                               <BiLogoMongodb></BiLogoMongodb>
                            </span>
                            <span className="bannerIcon">
                                <SiFigma />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        {/* Right Banner Part */}
            <div className='w-1/2 flex justify-center items-center'>
                <img className='w-[500px] h-[680px] z-10' src={banner} alt="" />
                <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
            </div>
        </section>
    );
};

export default Banner;