import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Login } from '../pages/Login.jsx';

export function LoginSignup({ toggleNav, toggleModal }) {
    // const [isModalOpen, setIsModalOpen] = useState(false); 
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    // const toggleModal = () => {
    //     // toggleNav();
    //     setIsModalOpen(prevState => !prevState); 
    // };

    return (
        <>
            <div className="modal-overlay" onClick={toggleNav}></div>
            <div className="login-signup-btn" onClick={stopPropagation}>
                <nav className="login-signup-nav" onClick={toggleNav}>
                    <a onClick={toggleModal}>Log in</a>

                    <NavLink to="signup">Sign up</NavLink>
                    <div className='signup-nav-border' onClick={stopPropagation}></div>
                    <a href="#">Gift cards</a>
                    <a href="#">Airbnb your home</a>
                    <a href="#">Help center</a>
                </nav>
                <Outlet />
            </div>
            {/* <div className='login-container'>{isModalOpen && <Login toggleModal={toggleModal} />}</div> */}
        </>
    );
}
