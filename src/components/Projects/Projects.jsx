import React from 'react';
import Title from '../Title/Title';
import './Projects.css'
import { FaGithub, FaGlobe, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
            <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects"></Title>

            <div className='flex gap-5 justify-between'>
                <div>
                    <div className='container container1'></div>
                    <div className='flex justify-between items-center mt-5'>
                        <h3 className='text-xl uppercase font-bold tracking-wide'>The Martial Arts</h3>
                        <div>
                            <Link to="https://martial-arts-1c961.web.app/" target='_blank' className='hover:text-designColor cursor-pointer duration-500 text-xl'>
                                <FaGlobe></FaGlobe>
                            </Link>
                        </div>
                    </div>
                    <div className='lg:w-[310px] mt-5'>
                        <p>This is a training center base website. Where there are 3 dashboards. The website has been formed by admin, student, instructor </p>
                        <span onClick={() => window.my_modal_1.showModal()}><FaArrowRight className='text-3xl font-semibold mt-3 text-red-500 cursor-pointer'></FaArrowRight>
                        </span>
                    </div>

                    <dialog id="my_modal_1" className="modal">
                        <form method="dialog" className="modal-box w-11/12 bg-gray-600 max-w-5xl text-white">
                            <div>
                                <h3 className="font-bold font-titleFont text-2xl text-designColor mb-3">The Martial Arts</h3>
                                <div className='flex gap-3 items-center'>
                                    <h2 className='text-lime-400 font-semibold font-titleFont'>Live Website:</h2>
                                    <Link to="https://martial-arts-1c961.web.app/" className='hover:text-designColor cursor-pointer duration-500 text-xl' target='_blank'>
                                        <FaGlobe></FaGlobe>
                                    </Link>
                                </div>

                                <div className='flex gap-3 items-center my-2'>
                                    <h1 className='text-lime-400 font-semibold font-titleFont'>Client Site Code:</h1>
                                    <Link to="https://github.com/noornabi07/martial-arts-client" className='hover:text-designColor cursor-pointer duration-500 text-xl' target='_blank'>
                                        <FaGithub></FaGithub>
                                    </Link>
                                </div>

                                <div className='flex gap-3 items-center'>
                                    <h3 className='text-lime-400 font-semibold font-titleFont'>Server Site Code:</h3>
                                    <Link to="https://github.com/noornabi07/martial-arts-server" className='hover:text-designColor cursor-pointer duration-500 text-xl' target='_blank'>
                                        <FaGithub></FaGithub>
                                    </Link>
                                </div>


                                {/* technology used */}
                                <div>
                                    <h1 className='my-4'><span className='text-lime-400 font-semibold font-titleFont'>Technologies used:-</span> React js, Tailwind CSS, DaisyUI, Firebase Authentication, Dark Mode Toggle, React-lazy-load, json web token, Axios secure, custom hooks, AOS animation</h1>

                                    <div>
                                        <h1 className='text-lime-400 font-semibold font-titleFont'>Key Feature:-  </h1>
                                        <ul>
                                            <li>1. Where students can create an account and select their own classes.</li>
                                            <li>2. Students can log in or log out easily. Also, they can create an account through Google</li>
                                            <li>3. Students can enroll in their selected classes by making a payment</li>
                                            <li>4. Admin can create an instructor here. Then instructors can add their classes.</li>
                                            <li>5. Admin can check instructor's classes and accept and return them.</li>
                                            <li>6. All students can view all classes of the instructors. You can see the instructors again.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="modal-action">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </div>
                        </form>
                    </dialog>

                </div>
                {/* Animal toys shop */}
                <div>
                    <div className='container container2'></div>
                    <div className='flex justify-between items-center mt-5'>
                        <h3 className='text-xl uppercase font-bold tracking-wide'>The Animal Toys Shop</h3>
                        <Link to="https://animal-toys-shop.web.app/" className='hover:text-designColor cursor-pointer duration-500 text-xl'>
                            <FaGlobe></FaGlobe>
                        </Link>
                    </div>
                    <div className='lg:w-[310px] mt-5'>
                        <p>This is a training center base website. Where there are 3 dashboards. The website has been formed by admin, student, instructor </p>
                        <span onClick={() => window.my_modal_2.showModal()}><FaArrowRight className='text-3xl font-semibold mt-3 cursor-pointer text-red-500'></FaArrowRight>
                        </span>
                    </div>

                    <dialog id="my_modal_2" className="modal">
                        <form method="dialog" className="modal-box w-11/12 bg-gray-600 max-w-5xl text-white">
                            <div>
                                <h3 className="font-bold font-titleFont text-2xl text-designColor mb-3">Animal Toys Shop</h3>
                                <div className='flex gap-3 items-center'>
                                    <h2 className='text-lime-400 font-semibold font-titleFont'>Live Website:</h2>
                                    <Link to="https://martial-arts-1c961.web.app/" className='hover:text-designColor text-xl cursor-pointer duration-500' target='_blank'>
                                        <FaGlobe></FaGlobe>
                                    </Link>
                                </div>

                                <div className='flex gap-3 items-center my-2'>
                                    <h1 className='text-lime-400 font-semibold font-titleFont'>Client Site Code:</h1>
                                    <Link to="https://github.com/noornabi07/martial-arts-client" className='hover:text-designColor cursor-pointer duration-500 text-xl' target='_blank'>
                                        <FaGithub></FaGithub>
                                    </Link>
                                </div>

                                <div className='flex gap-3 items-center'>
                                    <h3 className='text-lime-400 font-semibold font-titleFont'>Server Site Code:</h3>
                                    <Link to="https://github.com/noornabi07/martial-arts-server" className='hover:text-designColor cursor-pointer duration-500 text-xl' target='_blank'>
                                        <FaGithub></FaGithub>
                                    </Link>
                                </div>


                                {/* technology used */}
                                <div>
                                    <h1 className='my-4'><span className='text-lime-400 font-semibold font-titleFont'>Technologies used:-</span> React js, Tailwind CSS, DaisyUI, Firebase Authentication, Dark Mode Toggle, React-lazy-load, json web token, Axios secure, custom hooks, AOS animation</h1>

                                    <div>
                                        <h1 className='text-lime-400 font-semibold font-titleFont'>Key Feature:-  </h1>
                                        <ul>
                                            <li>1. Where students can create an account and select their own classes.</li>
                                            <li>2. Students can log in or log out easily. Also, they can create an account through Google</li>
                                            <li>3. Students can enroll in their selected classes by making a payment</li>
                                            <li>4. Admin can create an instructor here. Then instructors can add their classes.</li>
                                            <li>5. Admin can check instructor's classes and accept and return them.</li>
                                            <li>6. All students can view all classes of the instructors. You can see the instructors again.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="modal-action">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </div>
                        </form>
                    </dialog>
                </div>
                {/* the food network */}
                <div>
                    <div className='container container3'></div>
                    <div className='flex justify-between items-center mt-5'>
                        <h3 className='text-xl uppercase font-bold tracking-wide'>The Foods Network</h3>
                        <Link to="https://the-food-network-client.web.app/" target='_blank' className='hover:text-designColor cursor-pointer duration-500 text-xl'>
                            <FaGlobe></FaGlobe>
                        </Link>
                    </div>
                    <div className='lg:w-[310px] mt-5'>
                        <p>It is an information network base website. Here is information on selecting staff to cook preferred foods. Employees will be appointed after seeing the preferred food</p>
                        <span onClick={() => window.my_modal_3.showModal()}><FaArrowRight className='text-3xl font-semibold mt-3 cursor-pointer text-red-500'></FaArrowRight>
                        </span>
                    </div>
                </div>
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box w-11/12 bg-gray-600 max-w-5xl text-white">
                        <div>
                            <h3 className="font-bold font-titleFont text-2xl text-designColor mb-3">The Food Network</h3>
                            <div className='flex gap-3 items-center'>
                                <h2 className='text-lime-400 font-semibold font-titleFont '>Live Website:</h2>
                                <Link to="https://the-food-network-client.web.app/" className='hover:text-designColor cursor-pointer text-xl duration-500' target='_blank'>
                                    <FaGlobe></FaGlobe>
                                </Link>
                            </div>

                            <div className='flex gap-3 items-center my-2'>
                                <h1 className='text-lime-400 font-semibold font-titleFont '>Client Site Code:</h1>
                                <Link to="https://github.com/noornabi07/the-food-network-client10" className='hover:text-designColor cursor-pointer duration-500 text-xl' target='_blank'>
                                    <FaGithub></FaGithub>
                                </Link>
                            </div>

                            <div className='flex gap-3 items-center'>
                                <h3 className='text-lime-400 font-semibold font-titleFont '>Server Site Code:</h3>
                                <Link to="https://github.com/noornabi07/the-food-network-server10" className='hover:text-designColor cursor-pointer duration-500 text-xl' target='_blank'>
                                    <FaGithub></FaGithub>
                                </Link>
                            </div>


                            {/* technology used */}
                            <div>
                                <h1 className='my-4'><span className='text-lime-400 font-semibold font-titleFont'>Technologies used:-</span> React js, Tailwind CSS, DaisyUI, Firebase Authentication, pdf, React-lazy-load, React-scroll-to-top </h1>

                                <div>
                                    <h1 className='text-lime-400 font-semibold font-titleFont '>Key Feature:-  </h1>
                                    <ul>
                                        <li>1. All chef and their short details on a card and all recipe pages is a protected page.</li>
                                        <li>2. Then all the details of each chief according to their ID are shown on that page.</li>
                                        <li>3. Click the download pdf button content is downloaded in a pdf format. </li>
                                        <li>4. Authentication to create a user with a Gmail password is shown.</li>
                                        <li>5. The view recipe page is placed inside the private route.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="modal-action">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </dialog>
            </div>
        </section>
    );
};

export default Projects;