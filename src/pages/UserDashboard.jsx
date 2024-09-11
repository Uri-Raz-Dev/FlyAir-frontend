import { useEffect, useRef, useState } from "react"
import { Outlet, NavLink } from 'react-router-dom'
import { Login } from '../pages/Login.jsx';

export function UserDashboard({ toggleNav, toggleModal, onLogout }) {

    const stopPropagation = (e) => { e.stopPropagation() }



    return (
        <>
            <header className="header">
                <div className="logo">
                    {/* לוגו */}
                    <img src="/path-to-your-logo.png" alt="Logo" className="logo-image" />
                </div>

                <div className="welcome-section">
                    {/* הודעת ברוך הבא */}
                    <h1 className="welcome-message">Welcome back, Omer</h1>
                </div>

                <div className="reservations">
                    {/* לינקים לרזולוציות */}
                    <button className="reservation-button">Checking out (0)</button>
                    <button className="reservation-button">Currently hosting (0)</button>
                    <button className="reservation-button">Arriving soon (0)</button>
                    <button className="reservation-button">Upcoming (0)</button>
                    <button className="reservation-button">Pending review (0)</button>
                    <a href="/all-reservations" className="all-reservations-link">All reservations (0)</a>
                </div>

                <div className="menu-section">
                    {/* תפריט ומידע נוסף */}
                    <ul className="menu">
                        <li><a href="/today">Today</a></li>
                        <li><a href="/calendar">Calendar</a></li>
                        <li><a href="/listings">Listings</a></li>
                        <li><a href="/messages">Messages</a></li>
                    </ul>
                    {/* התראות ופרופיל משתמש */}
                    <div className="user-icons">
                        <a href="/notifications">
                            <span className="notification-icon">🔔</span>
                            <span className="notification-count">16</span>
                        </a>
                        <a href="/profile">
                            <img src="/path-to-profile-picture.jpg" alt="Profile" className="profile-image" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}
