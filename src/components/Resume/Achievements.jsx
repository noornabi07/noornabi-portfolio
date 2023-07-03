import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from "framer-motion"

const Achievements = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration: 0.8}}} className='w-1/3 mx-auto flex justify-center items-center'>
            <div>
                <div className='pt-5 font-titleFont text-center'>
                    <h2 className='text-3xl font-bold -ml-20  mt-10'>Achievements</h2>
                </div>
                <div className='mt-4 w-full flex justify-between  border-l-[6px] border-l-black border-opacity-30'>
                    <ResumeCard
                        title="Freelancing"
                        subTitle="Professional worked in marketplace"
                        des="I have complete small many project in international marketplace. And I learning and skills improve day by day."
                    ></ResumeCard>
                </div>
            </div>

        </motion.div>
    );
};

export default Achievements;