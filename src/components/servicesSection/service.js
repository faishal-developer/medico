import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const OneService = (props) => {
    const {name,description,icon,id} = props.data
    return (
        <div>
            <div className='service-bg my-0 p-3'>
                <div className='w-25 mx-auto my-3'>
                    <FontAwesomeIcon style={{fontSize:'60px'}} className='text-info' icon={icon}/>
                </div>
                <h3 className='service-p'>{name}</h3>
                <p className='text-secondary text-decoration-justify mb-0'>{description.substring(0,80)}...</p>
                <NavLink to={`/services/${id}`} className='text-decoration-none' >Read More <span><FontAwesomeIcon icon={faArrowRight}/></span></NavLink>
            </div>
        </div>
    );
};

export default OneService;