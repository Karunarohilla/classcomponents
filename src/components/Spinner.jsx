import React, {Component} from 'react';
import imageload from '../assets/images/imageload.gif';
export default class Spinner extends Component{
    render(){
        return(
            <>
                <div className="container">
                    <img src={imageload} alt="imageload" />
                </div>
            </>
        );
    }
}