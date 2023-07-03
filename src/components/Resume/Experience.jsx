import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration: 0.8}}} className='w-1/3 mx-auto flex justify-center items-center'>
    
            <div>
                <div className='pt-5 font-titleFont'>
                    <h2 className='text-3xl font-bold mt-10'>Training Experience</h2>
                </div>
                <div className='mt-4 w-full flex justify-between border-l-[6px] border-l-black border-opacity-30  gap-10'>
                    <ResumeCard
                        title="Programming Hero"
                        subTitle="Present 2023"
                        result="Passed"
                        des="I have complete a MERN stack development course in programming hero. Now, I will learning new technology day by day."
                    ></ResumeCard>
                </div>
            </div>

        </motion.div>
    );
};

export default Experience;