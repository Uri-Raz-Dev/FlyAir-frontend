import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Login } from '../pages/Login.jsx';

export function LoginSignup({ toggleNav, toggleModal }) {
    // const [isModalOpen, setIsModalOpen] = useState(false); // ניהול מצב המודל המקומי

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    // const toggleModal = () => {
    //     // קודם מבצעים את toggleNav ולאחר מכן את setIsModalOpen עם גישה לפונקציה הנוכחית של המצב
    //     // toggleNav();
    //     setIsModalOpen(prevState => !prevState); // שימוש בגרסה הפונקציונלית כדי לוודא שהשינוי נכון
    // };

    return (
        <>
            <div className="modal-overlay" onClick={toggleNav}></div>
            <div className="login-signup-btn" onClick={stopPropagation}>
                <nav className="login-signup-nav">
                    {/* כפתור לפתיחת המודל */}
                    <a onClick={toggleModal}>Log in</a>

                    <NavLink to="signup">Sign up</NavLink>
                    <div className='signup-nav-border'></div>
                    <a href="#">Gift cards</a>
                    <a href="#">Airbnb your home</a>
                    <a href="#">Help center</a>
                </nav>
                <Outlet />
                {/* רינדור המודל רק אם הוא פתוח */}
            </div>
            {/* <div className='login-container'>{isModalOpen && <Login toggleModal={toggleModal} />}</div> */}
        </>
    );
}
