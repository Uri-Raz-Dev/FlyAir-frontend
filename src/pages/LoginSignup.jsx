import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

export function LoginSignup() {
    return (
        <div className="login-page">
            <nav className="login-nav">
                <a><NavLink to=".">Login</NavLink></a>
                <a className='Signup-link'><NavLink to="signup">Signup</NavLink></a>
                <a>Gift cards</a>
                <a>Airbnb your home</a>
                <a>Help center</a>
               



            </nav>
            {/* <Outlet/> */}
        </div>
    )
}

{/* <div className="login-page">
<nav>
    <NavLink to=".">Login</NavLink>
    <NavLink to="signup">Signup</NavLink>
    <p>ddd</p>
</nav>
<Outlet/>
</div> */}