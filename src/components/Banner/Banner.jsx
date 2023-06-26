import React from 'react';

const Banner = () => {
    return (
        <section id='home' className="w-full pt-10 pb-20 flex items-center font-titleFont border-b-[1px] border-b-black">
            <div className='w-1/2'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                    <h1 className='text-6xl font-bold text-white'>
                        Hi, I'm
                        <span className='text-designColor capitalize'> Noornabi</span></h1>
                    <h2 className='text-4xl font-bold text-white'>
                        a <span>Frontend Developer</span>
                    </h2>
                    <p className='text-base font-bodyFont leading-6 tracking-wide'>Passionate Frontend Developer with strong teamwork skills. In addition to my
                        technical skills, I possess excellent communication and organizational skills, allowing me to
                        effectively manage my time and prioritize tasks. Dedicated to continuous learning and staying
                        up-to-date with the latest technologies and trends in development</p>
                </div>
            </div>

            <div className='w-1/2'></div>
        </section>
    );
};

export default Banner;