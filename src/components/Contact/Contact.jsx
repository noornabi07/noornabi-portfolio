import React, { useState } from 'react';
import Title from '../Title/Title';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import { BsFillSendCheckFill } from 'react-icons/Bs';

const Contact = () => {
    const [username, setUsername] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    // ========== Email Validation start here ==============
    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };
    // ========== Email Validation end here ================

    const handleSend = (e) => {
        e.preventDefault();
        if (username === "") {
            setErrMsg("Username is required!");
            setSuccessMsg("")
        } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!");
            setSuccessMsg("")
        } else if (email === "") {
            setErrMsg("Please give your Email!");
            setSuccessMsg("")
        } else if (!emailValidation(email)) {
            setErrMsg("Give a valid Email!");
            setSuccessMsg("")
        } else if (subject === "") {
            setErrMsg("Plese give your Subject!");
            setSuccessMsg("")
        } else if (message === "") {
            setErrMsg("Message is required!");
            setSuccessMsg("")
        } else {
            setSuccessMsg(
                `Thank you dear ${username}, Your Messages has been sent Successfully!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    };

    return (
        <section id='contact' className='w-full py-20 '>
            <Title title="Contact" des="Contact With Me"></Title>

            <div className='w-full'>
                <div className='w-full h-auto flex gap-20 items-center'>
                    <div className='w-[40%]'>
                        <ContactInfo></ContactInfo>
                    </div>

                    {/* right side */}
                    <div className='w-[60%] h-full -mt-24 from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne flex flex-col'>
                        <form className='w-full flex flex-col gap-6 py-2'>
                            {/* error and success message */}
                            {errMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-yellow-400 text-base tracking-wide animate-bounce">
                                    {errMsg}
                                </p>
                            )}
                            {successMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                    {successMsg}
                                </p>
                            )}

                            <div className='w-full flex gap-10'>
                                {/* name */}
                                <div className='w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Name</p>
                                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="name" className={`${errMsg === "Username is required!" &&
                                        "outline-designColor"
                                        } contactInput`} />
                                </div>

                                {/* phone number */}

                                <div className='w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>phone number</p>
                                    <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type="text" placeholder="phone" className={`${errMsg === "Phone number is required!" &&
                                        "outline-designColor"
                                        } contactInput`} />
                                </div>
                            </div>

                            <div className='w-full flex gap-10'>
                                {/* email */}
                                <div className='w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>email</p>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="email" className={`${errMsg === "Please give your Email!" &&
                                        "outline-designColor"
                                        } contactInput`} />
                                </div>

                                {/* subject */}
                                <div className='w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>subject</p>
                                    <input onChange={(e) => setSubject(e.target.value)} value={subject} type="text" placeholder="subject" className={`${errMsg === "Plese give your Subject!" &&
                                        "outline-designColor"
                                        } contactInput`} />
                                </div>
                            </div>

                            {/* message */}
                            <div className='flex flex-col gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>message</p>
                                <textarea onChange={(e) => setMessage(e.target.value)} value={message} rows="10" className={`${errMsg === "Message is required!" && "outline-designColor"}  w-full bg-[#191b1e] p-4 border-[1px] border-pink-500 rounded-lg`} placeholder='Your Message'>

                                </textarea>

                                {/* w-full bg-[#191b1e] p-4 border-[1px] border-pink-500 rounded-lg */}

                                {/* <input type="email" placeholder="subject" className="contactInput" /> */}
                            </div>

                            <div className='text-center'>
                                <button onClick={handleSend} className="btn btn-block  btn-outline duration-300 btn-secondary"><BsFillSendCheckFill></BsFillSendCheckFill> Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;