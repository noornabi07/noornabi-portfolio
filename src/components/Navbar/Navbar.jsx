import React from 'react';
import profile from '../../assets/white-img.png'
import { navLinks } from '../../Constant/Index';
import { Link } from 'react-scroll'


const Navbar = () => {
    return (
        <div className='w-full h-20 sticky top-0 z-20 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
            <div className='flex items-center'>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={profile} />
                    </div>
                </div>
                <div className='ml-4'>
                    <h2>INBIO</h2>
                </div>
            </div>

            <div>
                <ul className='flex items-center gap-10'>
                    {
                        navLinks.map((navlink) => <li className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300" key={navlink._id}>
                            <Link
                                activeClass="active"
                                to={navlink.link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >{navlink.title}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;