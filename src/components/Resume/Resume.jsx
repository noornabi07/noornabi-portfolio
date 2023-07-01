import React from 'react';
import Title from '../Title/Title';
import Education from './Education';
import Skills from './Skills';

const Resume = () => {
    return (
        <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
            <Title title="1+ YEARS OF EXPERIENCE" des="My Resume"></Title>

            <div>
                <ul className='grid grid-cols-4 gap-20 justify-center'>
                    <li className='resumeli'>Education</li>
                    <li className='resumeli'>Professional Skills</li>
                    <li className='resumeli'>Experience</li>
                    <li className='resumeli'>Achievements</li>
                </ul>
            </div>
            {/* <Education></Education> */}
            <Skills></Skills>
        </section>
    );
};

export default Resume;