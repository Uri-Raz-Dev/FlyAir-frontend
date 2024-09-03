import { Link, NavLink } from "react-router-dom"
import { useLocation, useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { logout } from "../store/actions/user.actions"
import { StayFilter } from "./StayFilter.jsx"
import { SvgIcon } from "./Svgicon.jsx"
import { useRef, useState } from "react"
import { LoginSignup } from '../pages/LoginSignup.jsx'

export function AppHeader({ filterBy, onSetFilter }) {
	const dispatch = useDispatch()

	const user = useSelector(storeState => storeState.userModule.user)
	const headerRef = useRef(null)
	const [isNavOpen, setIsNavOpen] = useState(false); // ניהול ה-state לפתיחת/סגירת המודל
	const stays = useSelector(storeState => storeState.stayModule.stays)

	function toggleNav() {
		
		setIsNavOpen(!isNavOpen) // משנה את ה-state לפתיחה או סגירה של המודל
	}

	const navigate = useNavigate()
	const location = useLocation()
	const isLocation = location.pathname.startsWith(`/stay/s`)

	async function onLogout() {

		try {
			await logout()
			navigate("/")
			showSuccessMsg(`Bye now`)
		} catch (err) {
			showErrorMsg("Cannot logout")
		}
	}

	return (
		<header ref={headerRef} className={isLocation ? "app-header details full main-container" : "app-header full main-container"}>
			<div>

				<Link to={"stay/"} className="logo">

					<SvgIcon iconName={"logosymbol"}></SvgIcon>
					<p>FlyAir</p>

				</Link>

				<StayFilter filterBy={filterBy} onSetFilter={onSetFilter} />

				<nav className="profile">

					<Link className="host-link" to={"/hosting"}>
						<div>Switch to hosting</div>
					</Link>  {/* //new user will show "airbnb your home" */}
					<Link className="language-link" to={"/"}>
						<SvgIcon iconName={"language"}></SvgIcon>
					</Link>

					<div className="user-menu" onClick={toggleNav}> 
						<SvgIcon iconName={"usermenu"}></SvgIcon>
						{stays.length > 0 && stays[0].host && <img src={stays[0].host.imgUrl} alt="" />}
						{isNavOpen && <LoginSignup toggleNav={toggleNav} />} 
					</div>

				</nav>
			</div>

		</header>
	)
}
