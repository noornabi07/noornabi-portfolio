import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from "framer-motion"

const Achievements = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration: 0.8}}} className='w-full flex justify-between items-center'>
            <div>
                <div className='pt-5 font-titleFont'>
                    <h2 className='text-3xl font-bold  mt-10'>Achievements</h2>
                </div>
                <div className='mt-4 w-full flex justify-between  border-l-[6px] border-l-black border-opacity-30  gap-10'>
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
                    {/* <h2 className='text-3xl font-bold mt-10'>Education Quality</h2> */}
                </div>
                <div className='mt-4 w-full flex justify-between border-l-[6px] border-l-black border-opacity-30  gap-10'>
                    <ResumeCard
                        title="Diploma in Computer Science"
                        subTitle="Present 2023 - Session 2019-2020"
                        result="Coming"
                        des="The training provided by universities in order to work in various sector of the economy of area of culture"
                    ></ResumeCard>
                </div>
            </div>

        </motion.div>
    );
};

export default Achievements;