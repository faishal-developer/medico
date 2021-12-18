import React from 'react';
import img1 from '../../images/galaries/hospital1.jpg'
import img2 from '../../images/galaries/hospital2.jpg'
import img3 from '../../images/galaries/hospital3.jpg'
import img4 from '../../images/galaries/hospital4.jpg'
import img5 from '../../images/galaries/hospital5.jpg'
import img6 from '../../images/galaries/hospital6.jpg'

const Galaries = () => {
    const images=[img1,img2,img3,img4,img5,img6]
    return (
        <div className="mt-3">
            <h2 className='mt-5 text-primary text-center'>OUR GALARIES</h2>
            <hr className='w-25 mx-auto'/>
            <div className="row gx-0 w-75 mx-auto row-cols-1 row-cols-md-3">
            {
                images.map((img,i)=><img key={i} alt='image2' src={img}/>)
            }
            </div>
        </div>
    );
};

export default Galaries;