import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakedata/fakedata';
import {Button} from 'react-bootstrap'

const SingleService = () => {
    let {serviceId} = useParams()
    let singleData = fakeData.find(data=>data.id==serviceId)
    let {name,description,img} = singleData

    return (
        <div className='d-flex align-items-center w-75 my-5 mx-auto'>
            <div className='col-6 me-3'>
                <img className='w-100' src={img} alt="" />
            </div>
            <div className='col-6'>
                <h3>{name}</h3>
                <p>{description}</p>
                <Button>Make Appoinment</Button>
            </div>
        </div>
    );
};

export default SingleService;