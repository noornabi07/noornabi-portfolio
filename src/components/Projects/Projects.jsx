import React from 'react';
import Title from '../Title/Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
            <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects"></Title>

            <div>
                <ProjectsCard></ProjectsCard>
            </div>
        </section>
    );
};

export default Projects;