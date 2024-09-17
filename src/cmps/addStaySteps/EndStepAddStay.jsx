
import React from 'react';
import { SvgIcon } from '../Svgicon';
// import successIcon from '../assets/success-icon.svg'; // שים את הנתיב של התמונה שלך כאן

export function EndStepAddStay() {
    return (
        <div className="step-5-container">
            <div className="success-message">
                {/* <img src={successIcon} alt="Success" className="success-icon" /> */}
                <SvgIcon className="success-icon" iconName="successIcon"/>
                <h1>Congratulations!</h1>
                <p>Your stay has been successfully created.</p>
                <p>Thank you for sharing your place with us.</p>
            </div>
        </div>
    );
}
