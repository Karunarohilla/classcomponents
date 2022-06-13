import React from 'react';
import imageload from '../assets/images/imageload.gif';
export default function Spinner(){
    return(
        <>
            <div className="container">
                <img src={imageload} alt="imageload" />
            </div>
        </>
    );
}