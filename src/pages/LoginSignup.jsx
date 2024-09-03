import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'


export function LoginSignup({ toggleNav }) {

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            <div className="modal-overlay" onClick={toggleNav}></div> 
            <div className="login-btn" onClick={stopPropagation}>
                <nav className="login-nav">
                    <NavLink to="login">Log in</NavLink>
                    <NavLink to="signup">Sign up</NavLink>
                    <div className='nav-border'></div>
                    <a>Gift cards</a>
                    <a>Airbnb your home</a>
                    <a>Help center</a>
                </nav>
                <Outlet/>
            </div>
        </>
    )
}
