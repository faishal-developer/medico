import React from 'react';

const Footer = () => {
    let style ={
        fontSize:'12px',
        letterSpacing:'1.5px'
    }
    return (
        <div className='d-flex bg-dark mt-3 text-secondary py-3 px-5 justify-content-between'>
            <p style={style}>Medical & Healthcare Theme by Mohammed Faishal</p>
            <p style={style}>Copyright © 2021 All rights reserved.</p>
        </div>
    );
};

export default Footer;