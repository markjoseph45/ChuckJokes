import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Bitmap from "./../assets/assets_Homework_Front-End_01/bitmap_2.png";


const Footer = (props) => {
    return (
        <div className="footer" style={{ backgroundImage: `url(${Bitmap})` }}>

            <div className="wrapper">
                
                <h3>GOT JOKES? GET PAID <br /> FOR SUBMITTING!</h3>

                <div className="submit-joke">
                    <button>
                        <span>SUBMIT JOKE</span>
                        <FontAwesomeIcon icon={faArrowRight} className='arrow-down' />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Footer;