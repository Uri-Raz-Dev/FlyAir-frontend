import { Link, NavLink } from "react-router-dom"
import { useLocation, useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { logout } from "../store/actions/user.actions"
import { StayFilter } from "./StayFilter.jsx"
import { SvgIcon } from "./Svgicon.jsx"
import { useRef, useState } from "react"
import { MiniFilter } from "./MiniFliter.jsx"

// import { NavBar } from './NavBarUser.jsx'
export function AppHeader({ filterBy, onSetFilter }) {
	const user = useSelector(storeState => storeState.userModule.user)
	const headerRef = useRef(null)
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const stays = useSelector(storeState => storeState.stayModule.stays)

	function toggleNav() {
		setIsNavOpen(!isNavOpen)
	}
	function openFilter() {
		setIsFilterOpen(!isFilterOpen)
	}

	// console.log(isFilterOpen);

	const navigate = useNavigate()
	const location = useLocation()
	const isLocation = location.pathname.startsWith(`/stay/s`)
	// const [filterBy, setFilterBy] = useState(stayService.getDefaultFilter())
	// const stays = useSelector(storeState => storeState.stayModule.stays)

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
			<div className="header-container">

				<Link to={"stay/"} className="logo">

					<SvgIcon iconName={"logosymbol"}></SvgIcon>
					<p>FlyAir</p>

				</Link>
				{isFilterOpen ? <StayFilter filterBy={filterBy} onSetFilter={onSetFilter} /> : <MiniFilter openFilter={openFilter} />}

				{/* <StayFilter filterBy={filterBy} onSetFilter={onSetFilter} /> */}

				<nav className="profile">
					<Link className="host-link" to={"/hosting"}>
						<div>Switch to hosting</div>
					</Link>  {/* //new user will show "airbnb your home" */}
					<Link className="language-link" to={"/"}>
						<SvgIcon iconName={"language"}></SvgIcon>
					</Link>

					<Link to={"/login"}>
						<div className="user-menu">
							<SvgIcon iconName={"usermenu"}></SvgIcon>
							{stays.length > 0 && stays[0].host && <img src={stays[0].host.imgUrl} alt="" />}
						</div>
					</Link>
				</nav>
			</div>

		</header>
	)
}
