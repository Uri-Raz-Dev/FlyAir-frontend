import { Link, NavLink } from "react-router-dom"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { logout } from "../store/actions/user.actions"
import { StayFilter } from "./StayFilter.jsx"
import { SvgIcon } from "./Svgicon.jsx"
import { useState } from "react"
// import { NavBar } from './NavBarUser.jsx'
export function AppHeader() {
	const user = useSelector(storeState => storeState.userModule.user)

	const [isNavOpen, setIsNavOpen] = useState(false);

	function toggleNav() {
		setIsNavOpen(!isNavOpen)
	}

	const navigate = useNavigate()
	const [filterBy, setFilterBy] = useState(stayService.getDefaultFilter())
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
		<header className="app-header full">
			<Link to={"/"} className="logo">

				<SvgIcon iconName={"logosymbol"}></SvgIcon>
				<p>FlyAir</p>

			</Link>

			<StayFilter filterBy={filterBy} setFilterBy={setFilterBy} />

			<nav className="profile">
				<Link className="host-link" to={"/"}>
					<div>Switch to hosting</div>
				</Link>  {/* //new user will show "airbnb your home" */}
				<Link className="language-link" to={"/"}>
					<SvgIcon iconName={"language"}></SvgIcon>
				</Link>

				<Link to={"/login"}>
					<button className="user-menu">
						<SvgIcon iconName={"usermenu"}></SvgIcon>
						<div>user</div>
					</button>
				</Link>
			</nav>


		</header>
	)
}
