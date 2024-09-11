import { useEffect, useRef, useState } from "react"
import { Outlet, NavLink } from 'react-router-dom'
import { Login } from '../pages/Login.jsx';

export function LoggedInUserModal({ toggleNav, toggleModal, onLogout }) {
    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            <div className="modal-overlay" onClick={toggleNav}></div>
            <div className="login-signup-btn" onClick={stopPropagation}>
                <nav className="login-signup-nav" onClick={toggleNav}>
                    <a href="#">Messages</a>
                    <a href="#">Trips</a>
                    <a href="#">Wishlists</a>
                    <div className='signup-nav-border'></div>
                    <a href="#">Manage listings</a>
                    <a href="#">Account</a>
                    <div className='signup-nav-border'></div>
                    <a href="#">Gift cards</a>
                    <a href="#">Help Center</a>
                    <a onClick={onLogout}>Log out</a>
                    {/* <button onClick={onLogout}>logout</button> */}

                </nav>
                <Outlet />
            </div>
            {/* <div className='login-container'>{isModalOpen && <Login toggleModal={toggleModal} />}</div> */}
        </>
    )
}
