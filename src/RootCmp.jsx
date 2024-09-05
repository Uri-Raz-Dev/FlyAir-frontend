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
    const isStayDetailsPage = location.pathname.startsWith(`/stay/s`)
    const { filterBy } = store.getState().stayModule
    const isShown = useSelector(storeState => storeState.userModule.isUserShown)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState)
    };

    return (
        <div className={isStayDetailsPage ? "main-container details" : "main-container"}>
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