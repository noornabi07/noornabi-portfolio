import React from 'react';
import Title from '../Title/Title';
import Card from './Card';
import { MdWeb, MdDeveloperBoard, MdSupport} from 'react-icons/Md';
import { SiAntdesign } from 'react-icons/si';
import { ImMobile } from 'react-icons/Im';
import { FaShopify } from 'react-icons/fa';

const Feature = () => {
    return (
        <section id='features' className="w-full pb-20 border-b-[1px] border-b-black">
            <Title title="Features" des="What I Do"></Title>

            <div className='grid grid-cols-3 justify-center gap-20'>
                <Card  titles="Web Design" descrip="Web design refers to the process of creating the visual layout, appearance, and overall aesthetics of a website. It involves planning and designing the various elements that users see and interact with when they visit a website. Web design is crucial for creating an engaging and user-friendly experience that aligns with the website's purpose and goals." icon={<MdWeb></MdWeb>}></Card>

                <Card titles="UI Design" descrip="Collaborating with clients and stakeholders to create wireframes, mockups, and prototypes that outline the visual and interactive aspects of the website or application. UI designers consider factors such as usability, accessibility, and branding to design interfaces that are aesthetically pleasing and user-friendly." icon={<SiAntdesign></SiAntdesign>}></Card>

                <Card titles="Front-End Development" descrip="Implementing the designs using HTML, CSS, and JavaScript to build the user-facing portion of the website. Front-end development refers to the process of building and implementing the user-facing components of a website or web application. It involves writing code that determines how the website looks and how users interact with it." icon={<MdDeveloperBoard></MdDeveloperBoard>}></Card>

                <Card titles="Mobile-Responsive Design" descrip="Ensuring websites are optimized for various screen sizes and devices, including smartphones and tablets" icon={<ImMobile></ImMobile>}></Card>

                <Card titles="E-commerce Development" descrip="Creating online stores and shopping cart systems to facilitate online sales, often involving payment gateway integration and inventory management." icon={<FaShopify></FaShopify>}></Card>

                <Card titles="Website Maintenance and Support" descrip="Providing ongoing updates, bug fixes, and technical support for existing websites." icon={<MdSupport></MdSupport>}></Card> 
            </div>
        </section>
    );
};

export default Feature;