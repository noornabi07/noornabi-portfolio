import React, { useState } from 'react';
import Title from '../Title/Title';
import Education from './Education';
import Skills from './Skills';
import Achievements from './Achievements';
import Experience from './Experience';

const Resume = () => {
    const [educationData, setEducationData] = useState(false)
    const [skillsData, setSkillsData] = useState(true)
    const [experienceData, setExperienceData] = useState(false)
    const [achievementsData, setAchievementsData] = useState(false)
    return (
        <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
            <Title title="1+ YEARS OF EXPERIENCE" des="My Resume"></Title>

            <div>
                <ul className='grid grid-cols-4 gap-20 justify-center'>
                <li onClick={() =>
                        setSkillsData(true) &
                        setEducationData(false) &
                        setExperienceData(false) &
                        setAchievementsData(false)
                    } className={`${skillsData ? 'border-designColor rounded-lg' : 'border-transparent'} resumeli`}>Professional Skills</li>
                    <li onClick={() =>
                        setEducationData(true) &
                        setSkillsData(false) &
                        setExperienceData(false) &
                        setAchievementsData(false)
                    } className={`${educationData ? 'border-designColor rounded-lg' : 'border-transparent'} resumeli`}>Education</li>
                    
                    <li onClick={() =>
                        setExperienceData(true) &
                        setSkillsData(false) &
                        setEducationData(false) &
                        setAchievementsData(false)
                    } className={`${experienceData ? 'border-designColor rounded-lg' : 'border-transparent'} resumeli`}>Experience</li>
                    <li onClick={() =>
                        setAchievementsData(true) &
                        setExperienceData(false) &
                        setSkillsData(false) &
                        setEducationData(false)

                    } className={`${achievementsData ? 'border-designColor rounded-lg' : 'border-transparent'} resumeli`}>Achievements</li>
                </ul>
            </div>
            {
                skillsData && <Skills />
            }
            {
                educationData && <Education />
            }
            {
                experienceData && <Experience />
            }
            {
                achievementsData && <Achievements />
            }
            {/* <Education></Education> */}
            {/* <Skills></Skills> */}
            {/* <Achievements></Achievements> */}
            {/* <Experience></Experience> */}
        </section >
    );
};

export default Resume;