// Banner.js
import React from 'react';
import { FaVolumeMute } from "react-icons/fa";
import { VscUnmute } from "react-icons/vsc";
import Header from './header';

function Banner({ handleHover, isHovered, handleButtonClick }) {
    return (
        <div className='banner'>
            <Header />
            <div className='text'>
                <h1>MutedMode</h1>
                <p>Style in Shadows</p>
                <button className='banner-mute-btn' onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handleButtonClick}>
                    {isHovered ? <VscUnmute /> : <FaVolumeMute />}
                </button>
            </div>
        </div>
    );
}

export default Banner;