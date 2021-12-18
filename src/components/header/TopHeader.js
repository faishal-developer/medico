import { faEnvelopeOpen, faHeartbeat, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const TopHeader = () => {
    return (
        <div>
            <div className='d-flex px-3 pt-2 justify-content-center justify-content-md-between'>
                <div className='d-flex ps-3 align-items-center'>
                    <FontAwesomeIcon className='fs-1 text-primary' icon={faHeartbeat} />
                    <h2 className='d-inline-block ps-2 text-info'>Medico</h2>
                </div>
                <div className='d-none d-md-flex'>
                    <div className='d-flex border-end pe-4 mx-3 align-items-center'>
                        <div className='mx-3'>
                            <FontAwesomeIcon className='fs-3 text-info' icon={faEnvelopeOpen}/>
                        </div>
                       <div>
                            <h4 className='mb-0 fs-5'>Mail Us</h4>
                            <small className='text-secondary'>mdfaishal329@gmail.com</small>
                       </div>
                    </div>
                    <div className='d-flex border-end pe-4 mx-3 align-items-center'>
                        <div className='mx-3'>
                            <FontAwesomeIcon className='fs-3 text-info' icon={faPhone}/>
                        </div>
                        <div>
                            <h4 className='mb-0 fs-5'>Call Us</h4>
                            <small className='text-secondary'>+880-1688-422699</small>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <NavLink to='/appoinment' className=' px-3 fs-6 py-2 text-white bg-primary border rounded-pill text-decoration-none'>Make Appoinment</NavLink>
                    </div>
                </div>            
            </div>
            <hr className='mx-2 text-info'/>
        </div>
    );
};

export default TopHeader;