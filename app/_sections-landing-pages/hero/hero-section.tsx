import React from 'react';
import './hero-section.styles.css';

const HeroSection: React.FC = () => {
    return (
        <div className='hero-section min-h-[75vh] w-full  flex items-center justify-center' id='home'>
            <div className='bg-primary text-white bg-opacity-50 p-8 rounded-lg w-[90%] md:w-[70%] text-center h-[50%]'>
                <h1 className='hero-title'>Welcome to Our Landing Page</h1>
                <p className='hero-subtitle'>We are glad to have you here. Discover more about us below.</p>
                <button className='hero-button'>Learn More</button>
            </div>
        </div>
    );
};

export default HeroSection;