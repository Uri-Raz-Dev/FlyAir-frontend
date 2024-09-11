import { Link, Outlet } from "react-router-dom";

export function HostingPage() {
    return (
        <div className="home-page-hosting">
            <header className="home-page-header">
                <div className='signup-nav-border'></div>
                <Link to="today" className="nav-btn home-page-hosting-today-btn">Today</Link>
                <Link to="calendar" className="nav-btn home-page-hosting-calendar-btn">Calendar</Link>
                <Link to="listings" className="nav-btn home-page-hosting-listings-btn">Listings</Link>
                <Link to="messages" className="nav-btn home-page-hosting-messages-btn">Messages</Link>
                <Link to="menu" className="nav-btn home-page-hosting-menu-btn">Menu</Link>
            </header>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}
