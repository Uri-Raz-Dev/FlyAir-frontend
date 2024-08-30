import React from 'react'
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
import { useSelector } from 'react-redux'
import { setFilterBy } from './store/actions/stay.actions.js'

// export function RootCmp() {
//     return (
//         <div className="main-container">
//             <AppHeader />
//             <UserMsg />

//             <main>
//                 <Routes>
//                     <Route path="/" element={<StayIndex />} />
//                     <Route path="about" element={<AboutUs />}>
//                         <Route path="team" element={<AboutTeam />} />
//                         <Route path="vision" element={<AboutVision />} />
//                     </Route>
//                     {/* <Route path="stay" element={<StayIndex />} /> */}
//                     <Route path="stay/:stayId" element={<StayDetails />} />
//                     <Route path="user/:id" element={<UserDetails />} />
//                     <Route path="review" element={<ReviewIndex />} />
//                     <Route path="chat" element={<ChatApp />} />
//                     <Route path="admin" element={<AdminIndex />} />
//                     <Route path="login" element={<LoginSignup />}>
//                         <Route index element={<Login />} />
//                         <Route path="signup" element={<Signup />} />
//                     </Route>
//                 </Routes>
//             </main>
//             <AppFooter />
//         </div>
//     )
// }


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
        component: LoginSignup,
        children: [
            {
                path: '',
                component: Login,
            },
            {
                path: 'signup',
                component: Signup,
            },
        ]
    },
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

    const filterBy = useSelector(storeState => storeState.stayModule.filterBy)

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    return (
        <div className={isStayDetailsPage ? "main-container details" : "main-container"}>
            {/* <NavBar/> */}
            <AppHeader filterBy={filterBy} onSetFilter={onSetFilter} />
            <UserMsg />
            <main >
                <Routes>
                    <Route path="/" element={<Navigate to="/stay" />} />
                    {renderRoutes(routes)}
                </Routes>
            </main >
            <AppFooter />
        </div>
    )
}