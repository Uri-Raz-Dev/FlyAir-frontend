import React, { useState } from 'react'
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



const routes = [
    {
        path: '/stay',
        component: StayIndex,
    },
    {
        path: '/hosting',
        component: HostingPage,

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



export function RootCmp() {
    const location = useLocation()
    const { stayId } = useParams()
    const { filterBy } = store.getState().stayModule
    let isStayDetailsPage = location.pathname

    function handleMainContainer() {
        if (isStayDetailsPage.startsWith(`/stay/6`)) {
            return "main-container details"
        } else if (isStayDetailsPage.startsWith(`/book/`)) {
            return "main-container book"
        } else if (isStayDetailsPage.startsWith(`/wishlist/`)) {
            return "main-container wishlist"
        } else if (isStayDetailsPage.startsWith(`/user/inbox`)) {
            return "main-container inbox"

        } else if (isStayDetailsPage.startsWith(`/hosting/order`)) {
            return "main-container order"
        } else if (isStayDetailsPage.startsWith(`/trip/`)) {
            return "main-container trip"
        } else {
            return "main-container"
        }
    }

    function handleHeader() {

    }
    const isShown = useSelector(storeState => storeState.userModule.isUserShown)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState)
    };

    return (
        <div className={handleMainContainer()}>

            <AppHeader filterBy={filterBy} onSetFilter={setFilterBy} toggleModal={toggleModal} />
            <UserMsg />
            <main className='empty-div'>
                <div className='login-container'>{isModalOpen && <Login toggleModal={toggleModal} />}</div>
                <Routes>
                    {isShown && console.log('isShown main main main:', isShown)}
                    <Route path="/" element={<Navigate to="/stay" />} />
                    {renderRoutes(routes)}
                </Routes>
            </main >

            <AppFooter />

        </div>
    )
}


