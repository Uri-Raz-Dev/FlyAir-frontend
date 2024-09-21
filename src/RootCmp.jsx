import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router'

import { HomePage } from './pages/HomePage'
import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
import { StayIndex } from './pages/StayIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { AdminIndex } from './pages/AdminIndex.jsx'

import { StayDetails } from './pages/StayDetails'
import { UserDetails } from './pages/UserDetails'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'
import { HostingPage } from './pages/HostingPage.jsx'
import { HostingList } from './cmps/HostingList.jsx'
import { setFilterBy } from './store/actions/stay.actions.js'
import { store } from './store/store.js'
import { StayBook } from './pages/StayBook.jsx'
import { toggleUserIsShown } from './store/actions/user.actions.js'
import { useSelector } from 'react-redux'
import { UserDashboard } from './pages/UserDashboard.jsx'
import { Messages } from './cmps/hosting/Messages.jsx'
import { Menu } from './cmps/hosting/menu.jsx'
import { Listings } from './cmps/hosting/Listings.jsx'
import { Calendar } from './cmps/Calendar.jsx'
import { Today } from './cmps/hosting/Today.jsx'
import { AddStay } from './cmps/AddStay.jsx'
import { HostingReservations } from './cmps/HostingReservations.jsx'
import { TripList } from './cmps/TripList.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import HostingCalendar from './cmps/HostingCalendar.jsx'



const routes = [
    {
        path: 'stay',
        component: StayIndex,
    },
    {
        path: 'add-stay',
        component: AddStay,
    },
    {
        path: 'hosting',
        component: HostingPage,
        children: [
            {
                path: 'today',
                component: Today,
            },
            {
                path: 'hosting-reservations',
                component: HostingReservations,
            },
            // {
            //     path: 'calendar',
            //     component: HostingCalendar,
            // },
            {
                path: 'listings',
                component: Listings,

            },
            {
                path: 'messages',
                component: Messages,
            },
            {
                path: 'menu',
                component: Menu,
            },

        ],
    },
    {
        path: 'about',
        component: AboutUs,
        children: [
            {
                path: 'team',
                component: AboutTeam,
            },
            {
                path: 'vision',
                component: AboutVision,
            },
        ]
    },
    {
        path: 'stay/:stayId',
        component: StayDetails,
    },
    {
        path: 'trips',
        component: TripList,
    },
    {
        path: 'user/:id',
        component: UserDetails,
    },
    {
        path: 'review',
        component: ReviewIndex,
    },
    {
        path: 'chat',
        component: ChatApp,
    },
    {
        path: 'book/:stayId',
        component: StayBook,
    },
    {
        path: 'admin',
        component: AdminIndex,
    },
    {
        path: 'login',
        component: Login,
    },
    {
        path: 'signup',
        component: Signup,
    },
    {
        path: 'dashboard/:id',
        component: UserDashboard,
    },
    // {
    //     path: '',
    //     component: LoginSignup,
    //     children: [
    //         {
    //             path: 'login',
    //             component: Login,
    //         },
    //         {
    //             path: 'signup',
    //             component: Signup,
    //         },
    //     ]
    // },
]

const renderRoutes = (routes) => routes.map((route) => (
    <Route
        key={route.path}
        path={route.path}
        element={<route.component />}
    >
        {route.children && renderRoutes(route.children)}
    </Route>
))



// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation, useParams, Route, Navigate, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import UserMsg from './UserMsg';
// import Login from './Login';
// import AppHeader from './AppHeader';
// import AppFooter from './AppFooter';
// import { renderRoutes } from './routes'; // נניח שיש פונקציה renderRoutes


export function RootCmp() {
    const location = useLocation();
    const { stayId } = useParams();
    const { filterBy } = store.getState().stayModule;
    let isStayDetailsPage = location.pathname;
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isHosting, setIsHosting] = useState(''); // במקום activeTab, נשתמש ב-isHosting
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const scrollY = useRef(0);

    const isShown = useSelector(storeState => storeState.userModule.isUserShown);
    let isHostingPage = location.pathname;

    // פונקציה למעבר בין הטאבים, כעת נשתמש ב-isHosting
    function toggleHosting(tabName) {
        setIsHosting(tabName); // עדכון isHosting לפי הטאב שנבחר
    }

    // useEffect(() => {
    //     function handleScroll() {
    //         scrollY.current = window.scrollY;

    //         if (scrollY.current === 0 && location.pathname === '/stay/') {
    //             setIsFilterOpen(false)
    //         } else {
    //             setIsFilterOpen(false);
    //         }

    //         // שינוי המצב של isHosting לפי pathname
    //         // if (scrollY.current === 0) {
    //         //     if (location.pathname.includes('hosting')) {
    //         //         toggleHosting('hosting');
    //         //     } else if (location.pathname.includes('today')) {
    //         //         toggleHosting('today');
    //         //     } else if (location.pathname.includes('listings')) {
    //         //         toggleHosting('listings');
    //         //     } else if (location.pathname.includes('calendar')) {
    //         //         toggleHosting('calendar');
    //         //     } else if (location.pathname.includes('messages')) {
    //         //         toggleHosting('messages');
    //         //     } else if (location.pathname.includes('add-stay')) {
    //         //         toggleHosting('add-stay');
    //         //     } else {
    //         //         toggleHosting(''); // אם לא נמצאים בטאב מסוים, להחזיר את isHosting למצב ריק
    //         //     }
    //         // }
    //     }

    //     window.addEventListener("scroll", handleScroll);
    //     handleScroll();

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [location.pathname, isHostingPage]);

    function openFilter() {
        setIsFilterOpen(prev => !prev);
    }

    function handleMainContainer() {
        if (isStayDetailsPage.startsWith(`/stay/6`)) {
            return "main-container details";
        } else if (isStayDetailsPage.startsWith(`/book/`)) {
            return "main-container book";
        } else if (isStayDetailsPage.startsWith(`/wishlist/`)) {
            return "main-container wishlist";
        } else if (isStayDetailsPage.startsWith(`/user/inbox`)) {
            return "main-container inbox";
        } else if (isStayDetailsPage.startsWith(`/hosting/order`)) {
            return "main-container order";
        } else if (isStayDetailsPage.startsWith(`/trip/`)) {
            return "main-container trip";
        } else if (isHostingPage.startsWith(`/hosting/`)) {
            return "main-container trip";
        } else {
            return "main-container";
        }
    }

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };

    return (
        <div className={handleMainContainer()}>
            <UserMsg />
            {isHosting ? (
                <main className='empty-div'>
                    <div className='login-container'>{isModalOpen && <Login toggleModal={toggleModal} />}</div>
                    <Routes>
                        {isShown && console.log('isShown main main main:', isShown)}
                        <Route path="/" element={<Navigate to="/stay" />} />
                        {/* <Route path="/hosting" element={<Navigate to="hosting/today" />} /> */}
                        {renderRoutes(routes)}
                    </Routes>
                </main>
            ) : (
                <>
                    {/* הצגת ה-AppHeader רק אם isHosting ריק */}
                    {isHosting === '' && (
                        <AppHeader
                            filterBy={filterBy}
                            onSetFilter={setFilterBy}
                            toggleModal={toggleModal}
                            isFilterOpen={isFilterOpen}
                            openFilter={openFilter}
                            toggleHosting={toggleHosting}

                        />
                    )}
                    <main className='empty-div'>
                        <div className='login-container'>{isModalOpen && <Login toggleModal={toggleModal} />}</div>
                        <Routes>
                            {isShown && console.log('isShown main main main:', isShown)}
                            <Route path="/" element={<Navigate to="/stay" />} />
                            <Route path="/hosting" element={<Navigate to="today" />} />

                            {renderRoutes(routes)}
                        </Routes>
                    </main>
                    {/* הצגת ה-AppFooter רק אם isHosting ריק */}
                    {isHosting === '' && <AppFooter />}
                </>
            )}
            <ToastContainer />
        </div>
    );
}



