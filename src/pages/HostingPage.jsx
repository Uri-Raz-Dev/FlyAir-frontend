import { Link, Outlet } from "react-router-dom";
import { SvgIcon } from "../cmps/Svgicon";
import { useState } from "react";

export function HostingPage() {
    const [activeTab, setActiveTab] = useState("today"); // שמור את הטאב הפעיל ב-state

    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // עדכון ה-state כאשר לוחצים על כפתור
    };

    return (
        <div className="home-page-hosting">
            <header className="home-page-header">
                <div className='signup-nav-border'></div>
                <div className="logo-hosting-container">

                    <Link
                        to="/stay"
                        className={`logo-hosting`}
                    >
                        <SvgIcon iconName={"logoHosting"} className="icon"></SvgIcon>
                    </Link>
                </div>
                <div className="nav-bar-header-hosting">


                    <Link
                        to="today"
                        className={`nav-btn home-page-hosting-today-btn ${activeTab === "today" ? "active" : ""}`}
                        onClick={() => handleTabClick("today")}
                    >
                        <SvgIcon iconName={"todayIcon"} className="icon"></SvgIcon>Today
                    </Link>
                    <Link
                        to="calendar"
                        className={`nav-btn home-page-hosting-calendar-btn ${activeTab === "calendar" ? "active" : ""}`}
                        onClick={() => handleTabClick("calendar")}
                    >
                        <SvgIcon iconName={"calendarIcon"} className="icon"></SvgIcon>Calendar
                    </Link>
                    <Link
                        to="listings"
                        className={`nav-btn home-page-hosting-listings-btn ${activeTab === "listings" ? "active" : ""}`}
                        onClick={() => handleTabClick("listings")}
                    >
                        <SvgIcon iconName={"listingsIcon"} className="icon"></SvgIcon>Listings
                    </Link>
                    <Link
                        to="messages"
                        className={`nav-btn home-page-hosting-messages-btn ${activeTab === "messages" ? "active" : ""}`}
                        onClick={() => handleTabClick("messages")}
                    >
                        <SvgIcon iconName={"messagesIcon"} className="icon"></SvgIcon>Messages
                    </Link>
                    <Link
                        to="menu"
                        className={`nav-btn home-page-hosting-menu-btn ${activeTab === "menu" ? "active" : ""}`}
                        onClick={() => handleTabClick("menu")}
                    >
                        <SvgIcon iconName={"usermenu"} className="icon"></SvgIcon>Menu
                    </Link>

                </div>



                {/* <div className="logo-hosting">

                    <SvgIcon iconName={"logoHosting"} className="icon"></SvgIcon>
                </div> */}



                {/* <Link
                    to="/stay"
                    className={`logo-hosting`}
                >
                    <SvgIcon iconName={"logoHosting"} className="icon"></SvgIcon>
                </Link> */}



















            </header>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}
