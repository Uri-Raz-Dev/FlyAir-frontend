import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

export function Today() {
    const scrollContainerRef = useRef(null);
    const loggedInUser = useSelector(storeState => storeState.userModule.user);
    const { _id, fullname } = loggedInUser;

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({
            left: -300, // Adjust this value as needed
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({
            left: 300, // Adjust this value as needed
            behavior: 'smooth'
        });
    };

    return (
        <div className="today-page">
            <header>
                <h1>Welcome back, {fullname}</h1>
            </header>

            <section className="reservations-section">
                <h2>Your reservations</h2>
                <div className="reservation-buttons">
                    <button>Checking out (0)</button>
                    <button>Currently hosting (0)</button>
                    <button>Arriving soon (0)</button>
                    <button>Upcoming (0)</button>
                    <button>Pending review (0)</button>
                </div>
                <div className="no-reservations">
                    <p>You don't have any guests checking out today or tomorrow.</p>
                </div>
                <div className="all-reservations">
                    {/* <Link to="hosting-reservations">
                        All reservations (0)
                    </Link> */}
                    <Link to="/hosting/hosting-reservations" className="hosting-reservations">All reservations</Link>
                </div>
            </section>

            <section className="help-section">
                <h2>We're here to help</h2>
                <div className="help-options">
                    <div className="help-card">
                        <h3>Join your local Host Club</h3>
                        <p>Connect, collaborate and share with other Hosts and community members.</p>
                    </div>
                    <div className="help-card">
                        <h3>Visit the Help Centre</h3>
                        <p>Find answers to questions about your listing, payments, reviews and more.</p>
                    </div>
                </div>
            </section>

            <section className="resources-section">
                <h2>Resources and tips</h2>
                <div className="scroll-container-wrapper">
                    <button className="scroll-btn left" onClick={scrollLeft}>
                        ←
                    </button>
                    <div className="resources-grid scroll-container" ref={scrollContainerRef}>
                        <div className="resource-card">
                            <img src="https://res.cloudinary.com/dooscjcpt/image/upload/v1726979944/avatars/p0hufmcd9qlpmzcah36k.png" alt="Experience" />
                            <h3>We're now accepting Experiences submissions! Learn more</h3>
                        </div>
                        <div className="resource-card">
                            <img src="https://res.cloudinary.com/dooscjcpt/image/upload/v1726979943/avatars/jocdnrrai4nq8pkfj0mx.png" alt="Guest reviews" />
                            <h3>Use guest reviews to improve</h3>
                        </div>
                        <div className="resource-card">
                            <img src="https://res.cloudinary.com/dooscjcpt/image/upload/v1726979943/avatars/j14ghzw4phpuw2muxxfi.png" alt="Cleaning tips" />
                            <h3>Clean like a pro with these expert tips</h3>
                        </div>
                        <div className="resource-card">
                            <img src="https://res.cloudinary.com/dooscjcpt/image/upload/v1726979943/avatars/jum3rrz19bkjopdaruf0.png" alt="Learning" />
                            <h3>Never stop learning how to improve your business</h3>
                        </div>
                    </div>
                    <button className="scroll-btn right" onClick={scrollRight}>
                        →
                    </button>
                </div>
                <section>
                    <Outlet />
                </section>
            </section>
        </div>
    );
}
