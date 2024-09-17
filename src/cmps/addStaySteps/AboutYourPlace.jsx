
import React from 'react';

export function AboutYourPlace() {
    return (
        <div className='step-1 about-your-place'>
            <div className='info-about-your-place'>
                <p className='p-step1'>Step 1</p>
                <h1>Tell us about your place</h1>
                <p>
                    In this step, we'll ask you which type of property you have and
                    if guests will book the entire place or just a room. Then let
                    us know the location and how many guests can stay.
                </p>
            </div>
            <div className='video-player-container'>
                <video
                    data-testid="video-player"
                    className="video-player-about-your-place"
                    autoPlay
                    crossOrigin="anonymous"
                    playsInline
                    preload="auto"
                >
                    <source src="/public/video/about-your-place-step-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
