import React, { useEffect, useState } from 'react';
import csco_gif from '../../assets/csco-gif.gif';



const Project_csco = () => {

    return (
        <>
            <div className='title'>
                <h2>CSCO</h2>
                <p>A social gallery</p>
                <img src={csco_gif} style={{ height: '500px', maxHeight: '500px' }} />

            </div>
        </>
    );
};

export default Project_csco;
