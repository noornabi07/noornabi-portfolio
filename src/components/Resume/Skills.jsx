import React from 'react';
import ResumeCard from './ResumeCard';

const Skills = () => {
    return (
        <div className='w-full flex justify-between items-center'>
            <div>
                <div className='pt-5 font-titleFont'>
                    <h2 className='text-3xl font-bold  mt-10'>Design Skill</h2>
                </div>
                <div className='mt-4 w-full flex justify-between h-[800px] border-l-[6px] border-l-black border-opacity-30  gap-10'>
                    <ResumeCard
                        title="Secondary School Education"
                        subTitle="Jharbari Amjadiya Dakhil Madrasha - 2019"
                        result="4.87/5"
                        des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale"
                    ></ResumeCard>
                </div>
            </div>


            <div>
                <div className='pt-5 font-titleFont'>
                    <h2 className='text-3xl font-bold mt-10'>Development Skill</h2>
                </div>
                <div className='mt-4 w-full flex justify-between h-[800px] border-l-[6px] border-l-black border-opacity-30  gap-10'>
                    <ResumeCard
                        title="Diploma in Computer Science"
                        subTitle="Present 2023 - Session 2019-2020"
                        result="Coming"
                        des="The training provided by universities in order to work in various sector of the economy of area of culture"
                    ></ResumeCard>
                </div>
            </div>

        </div>
    );
};

export default Skills;