import React from 'react';

const Card = ({ titles, descrip, icon }) => {
    return (
        <div data-aos="flip-left" data-aos-duration="500"
        data-aos-easing="linear" className='w-full px-12 py-10 h-80 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100'>
            <div className='h-72 overflow-y-hidden'>
                <div className='flex h-full flex-col gap-5 translate-y-14 group-hover:translate-y-0 transition-transform duration-500'>
                    <div>
                        <span className='text-5xl text-designColor'>{icon}</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl font-titleFont font-bold text-gray-300'>
                            {titles}
                        </h2>
                        <p className='base'>{descrip}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;