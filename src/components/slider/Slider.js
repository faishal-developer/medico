import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/banner/doctorBanner1.jpg'
import img2 from '../../images/banner/doctorBanner2.jpg'
import img3 from '../../images/banner/doctorBanner3.jpg'
import img4 from '../../images/banner/doctorBanner4.jpg'
import './Slider.css'

const Slider = () => {
    return (
        <div className="d-flex mt-6 justify-content-center">
            <Carousel className="slider-width">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="First slide"
                    />
                    <Carousel.Caption className='text-primary'>
                    <h3>Best Doctors</h3>
                    <p>Best Doctors from whole country</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img4}
                    alt="Second slide"
                    />

                    <Carousel.Caption className='text-primary'>
                    <h3>Skilled Nurse</h3>
                    <p>Best take-care system for your health</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="Third slide"
                    />

                    <Carousel.Caption className='text-primary'>
                    <h3>Modern Technology</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;