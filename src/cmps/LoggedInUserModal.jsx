import { useEffect, useRef, useState } from "react"
import { Outlet, NavLink, Link } from 'react-router-dom'
import { Login } from '../pages/Login.jsx';
import { useSelector } from "react-redux";


export function LoggedInUserModal({ toggleNav, toggleModal, onLogout , user}) {
    // const loggedInUser = useSelector(storeState => storeState.userModule.user);

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            <div className="modal-overlay" onClick={toggleNav}></div>
            <div className="login-signup-btn" onClick={stopPropagation}>
                <nav className="login-signup-nav" onClick={toggleNav}>
                    <a href="#">Messages</a>
                    <Link to={`trips`}>Trips</Link>
                    <a href="#">Wishlists</a>

                    <div className='signup-nav-border'></div>

                    <Link to={`hosting/listings`}>Manage listings</Link>
                    {/* <a href="#">Account</a> */}
                    <Link to={`user/${user._id}`}>Account</Link>
                    <div className='signup-nav-border'></div>
                    <a href="#">Gift cards</a>
                    <a href="#">Help Center</a>
                    <a onClick={onLogout}>Log out</a>

                </nav>
                <Outlet />
            </div>
            {/* <div className='login-container'>{isModalOpen && <Login toggleModal={toggleModal} />}</div> */}
        </>
    )
}
