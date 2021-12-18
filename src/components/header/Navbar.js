import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Container,Nav,Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../hooks/AuthContext';
import "./Header.css"

const NavBar = () => {
    const {firebaseData,logOut} = useContext(AuthContext)
    console.log(firebaseData);
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={NavLink} className=' menu-item ps-3 fw-bold' to="/home">HOME</Nav.Link>
                    <Nav.Link as={NavLink} className=' menu-item ps-3 fw-bold' to="/services">SERVICES</Nav.Link>
                    <Nav.Link as={NavLink} className='menu-item ps-3 fw-bold' to="/appoinment">APPOINTMENT</Nav.Link>
                    <Nav.Link as={NavLink} className=' menu-item ps-3 fw-bold' to="/contact">Contact Us</Nav.Link>
                </Nav>
                
                </Navbar.Collapse>
                <div className='d-flex align-items-center'>
                    {
                        firebaseData?.email ? (
                            <div className='d-flex'>
                                <p className='mb-0 text-info me-2'>{firebaseData.email}</p>
                                <span role='button' onClick={logOut} className='mb-0 px-3 text-white py-1 border rounded-pill cursor-pointer bg-info'>Log out</span>
                            </div>
                        ) : (
                            <div className='d-flex'>
                                <NavLink to='/login' className='text-decoration-none my-0 text-info fw-bold border-end px-2'>LogIn</NavLink>
                                <NavLink to='/register' className='text-decoration-none my-0 text-info fw-bold border-end px-2'>Register</NavLink>
                            </div>
                        )
                    }
                    <div className='d-none d-md-flex'>
                        <a className='fs-2 px-3' rel='noreferrer' target='_blank' href="https://facebook.com">
                            <FontAwesomeIcon className='social-icon text-info' icon={faFacebookSquare}/>
                        </a>
                        <a className='fs-2 px-3' rel='noreferrer' target='_blank' href="https://youtube.com">
                            <FontAwesomeIcon className='social-icon text-info' icon={faYoutubeSquare}/>
                        </a>
                        <a className='fs-2 px-3' rel='noreferrer' target='_blank' href="https://twitter.com">
                            <FontAwesomeIcon className='social-icon text-info' icon={faTwitterSquare}/>
                        </a>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
};

export default NavBar;