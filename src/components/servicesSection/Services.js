import React from 'react';
import fakeData from '../../fakedata/fakedata';
import OneService from './service';
import './Services.css'

const Services = () => {
    return (
        <div className='services-bg py-5'> 
            <p className='text-info fw-bold pt-5 mb-0 text-center'>Medical Services</p>
            <h2 className='text-white text-center mt-1'>Our Services</h2>
            <div className='row row-cols-1 g-2 row-cols-md-2 row-cols-lg-3 w-75 mx-auto '>
            {
                fakeData.map((data,i)=><OneService key={i} data={data}/>)
            }
            </div>
        </div>
    );
};

export default Services;