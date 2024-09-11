import { Link } from "react-router-dom";

export function HostingPage() {
    return <>
        <div className="home-page-hosting">
            <header className="home-page-header">
                <Link to={"/hosting/today"} className="nav-btn home-page-hosting-today-btn">Today</Link>
                <Link to={"/hosting/calendar"} className="nav-btn home-page-hosting-calendar-btn">Calendar</Link>
                <Link to={"/hosting/listings"} className="nav-btn home-page-hosting-listings-btn">Listings</Link>
                <Link to={"/hosting/messages"} className="nav-btn home-page-hosting-messages-btn">Messages</Link>
                <Link to={"/hosting/menu"} className="nav-btn home-page-hosting-menu-btn">Menu</Link>
                <div className='signup-nav-border'></div>
            </header>
        </div>
    </>
}
