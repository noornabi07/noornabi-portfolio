import React from 'react';
import Marquee from 'react-fast-marquee';
import html from '../../assets/best skills/html5.png'
import css from '../../assets/best skills/css-3.png'
import react from '../../../src/assets/best skills/react icon.png'
import mongodb from '../../assets/best skills/mongodb.png'
import tailwind from '../../assets/best skills/tailwind.png'
import figma from '../../assets/best skills/figma.png'
import javascript from '../../assets/best skills/javascript.png'
import github from '../../assets/best skills/github.png'
import api from '../../assets/best skills/api.png'




const BestSkills = () => {
    return (
        <div className='mb-10'>
            <Marquee>
                <div>
                    <img className='w-32' src={html} alt="" />
                </div>
                <div>
                    <img className='w-32 mx-6' src={css} alt="" />
                </div>
                <div>
                    <img className='w-32' src={tailwind} alt="" />
                </div>
                <div>
                    <img className='w-32 mx-6' src={javascript} alt="" />
                </div>
                <div>
                    <img className='w-32' src={react} alt="" />
                </div>
                <div>
                    <img className='w-32 mx-6' src={mongodb} alt="" />
                </div>
                <div>
                    <img className='w-32' src={figma} alt="" />
                </div>
                <div>
                    <img className='w-32 mx-6' src={github} alt="" />
                </div>
                <div>
                    <img className='w-32 mx-6' src={api} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default BestSkills;