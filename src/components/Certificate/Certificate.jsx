import React from 'react';
import Title from '../Title/Title';
import certificate from '../../../src/assets/certificate.png'

const Certificate = () => {
    return (
        <div>
            <Title title="Certificate" des="Programming Hero Course Certificate"></Title>
            <div className='flex flex-row justify-center items-center'>
                <img src={certificate} alt="" />
            </div>
        </div>
    );
};

export default Certificate;