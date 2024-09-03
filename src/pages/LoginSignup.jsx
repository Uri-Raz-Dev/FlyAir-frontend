import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Login } from '../pages/Login.jsx'; 

export function LoginSignup({ toggleNav }) {
    const [isModalOpen, setIsModalOpen] = useState(false); // ניהול מצב המודל

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen); 
        
    };

    return (
        <>
            <div className="modal-overlay" onClick={toggleNav}></div>
            <div className="login-signup-btn" onClick={stopPropagation}>
                <nav className="login-signup-nav">
                    {/* כפתור לפתיחת המודל */}
                    <a onClick={toggleModal}>Log in</a>

                    {/* לינק ל-signup */}
                    <NavLink to="signup">Sign up</NavLink>
                    <div className='signup-nav-border'></div>
                    <a href="#">Gift cards</a>
                    <a href="#">Airbnb your home</a>
                    <a href="#">Help center</a>
                </nav>
                <Outlet />

                {isModalOpen && <Login toggleModal={toggleModal} />}
            </div>
        </>
    );
}
