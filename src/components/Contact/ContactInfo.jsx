import React from 'react';
import contactImg from '../../assets/contactImg.png'
import { BiLogoLinkedin } from 'react-icons/Bi';
import { BsTwitter } from 'react-icons/Bs';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
    return (
        <div>
            <div className=' h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne'>
                <img data-aos="flip-left" data-aos-duration="500"
        data-aos-easing="linear" className='w-full h-64 object-cover rounded-lg mb-2' src={contactImg} alt="" />

                <div className='flex flex-col gap-4'>
                    <h3 className='text-3xl font-bold text-white mt-3'>Md Noornabi Islam</h3>
                    <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
                    <p className='text-base text-gray-400 tracking-wide'>I am MERN Stack Web Developer. In addition to my technical skills with strong teamwork skills, I possess excellent communication and organizational skills, allowing me to effectively manage my time and prioritize tasks.</p>
                    <p className='text-base text-gray-400 flex items-center gap-2'>
                        Phone: <span className='text-lightText'>+880 1318993159</span>
                    </p>
                    <p className='text-base text-gray-400 flex items-center gap-2'>
                        Email: <span className='text-lightText'>mdnoornabiislam1@gmail.com</span>
                    </p>
                </div>
                <div className='mt-6 flex items-center gap-5'>
                    <h2 className='text-base text-gray-400'>Find Me In:</h2>
                    <div className='flex gap-6 items-center mt-2'>
                        <Link to="https://www.facebook.com/mdnoornabiislamNK" target='_blank'>
                            <FaFacebookF className='text-2xl font-bold text-white hover:text-red-400 hover:scale-150 duration-300'></FaFacebookF>
                        </Link>
                        <Link to="https://www.linkedin.com/in/md-noornabi-islam-0a239821b/" target='_blank'>
                            <BiLogoLinkedin className='text-2xl font-bold text-white hover:text-red-400 hover:scale-150 duration-300'></BiLogoLinkedin>
                        </Link>
                        <Link to="https://twitter.com/MDNurna56749656" target='_blank'>
                            <BsTwitter className='text-2xl font-bold text-white hover:text-red-400 hover:scale-150 duration-300'></BsTwitter>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;