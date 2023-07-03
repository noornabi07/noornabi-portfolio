import React from 'react';
import { motion } from "framer-motion"

const Skills = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.8 } }} className='w-full md:flex justify-between gap-10 items-center'>
            <div className='w-full md:w-1/2 px-4'>
                <div className='pt-5 font-titleFont'>
                    <h2 className='text-3xl font-bold  lg:-mt-16'>Design Skill</h2>
                </div>

                <div className='mt-2 w-full md:flex md:flex-col gap-4'>
                    {/* photoshop */}
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>figma</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>100%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* figma */}
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Design</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>90%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* psd to html */}
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>photoshot</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>60%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* adobe illustratore */}

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>adobe illustratore</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>50%</span>
                            </motion.span>
                        </span>
                    </div>

                </div>
            </div>


            {/* development skills */}


            <div className='w-full md:w-1/2 px-4'>
                <div className='pt-5 font-titleFont'>
                    <h2 className='text-3xl font-bold mt-16'>Development Skill</h2>
                </div>

                <div className='mt-8 w-full flex flex-col gap-4'>
                    {/* html5 & css3 */}
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>html5 & css3</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>100%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* react js */}
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>React js</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>90%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* node js */}
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>node js</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>70%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* javaScript */}

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>javascript</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>75%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* mongodb */}
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>mongodb</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>70%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* firebase */}
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>firebase authentication</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>90%</span>
                            </motion.span>
                        </span>
                    </div>

                </div>
            </div>

        </motion.div>
    );
};

export default Skills;