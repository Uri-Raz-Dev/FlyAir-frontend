import { Link, NavLink } from "react-router-dom"
import { useLocation, useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { logout } from "../store/actions/user.actions"
import { StayFilter } from "./StayFilter.jsx"
import { SvgIcon } from "./Svgicon.jsx"
import { useEffect, useRef, useState } from "react"
import { MiniFilter } from "./MiniFliter.jsx"
import { LoginSignup } from '../pages/LoginSignup.jsx'

export function AppHeader({ filterBy, onSetFilter , toggleModal}) {
	const dispatch = useDispatch()

	const user = useSelector(storeState => storeState.userModule.user)
	const headerRef = useRef(null)
	const [isNavOpen, setIsNavOpen] = useState(false)
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

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
	const scrollY = useRef(0)

	useEffect(() => {
		function handleScroll() {
			scrollY.current = window.scrollY
			if (scrollY.current === 0) {
				setIsFilterOpen(true)
			} else {
				setIsFilterOpen(false)
			}
			console.log(scrollY.current)
		}


		window.addEventListener("scroll", handleScroll)

		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll)
		};
	}, []);
	function openFilter() {
		setIsFilterOpen(prev => !prev)


	}




	async function onLogout() {
		try {
			await logout()
			navigate("/")
			showSuccessMsg(`Bye now`)
		} catch (err) {
			showErrorMsg("Cannot logout")
		}
	}


	function handleHeader() {
		let header = "app-header full main-container"

		if (isLocation) {
			header = "app-header details full main-container"
		}

		if (isFilterOpen && isLocation) {
			header = "app-header details full main-container header-wide"
		} else if (isFilterOpen) {
			header = "app-header full main-container header-wide"
		}
		return header
	}

	return (
		<header ref={headerRef} className={handleHeader()}>
			<div className="header-container">

				<Link to={"stay/"} className="logo">

					<SvgIcon iconName={"logosymbol"}></SvgIcon>
					<p>FlyAir</p>

				</Link>
				{isFilterOpen ? <StayFilter filterBy={filterBy} onSetFilter={onSetFilter} isFilterOpen={isFilterOpen} />
					: <MiniFilter openFilter={openFilter} isFilterOpen={isFilterOpen} />}

				{/* <StayFilter filterBy={filterBy} onSetFilter={onSetFilter} /> */}

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

						{isNavOpen && <LoginSignup toggleNav={toggleNav} setIsNavOpen={setIsNavOpen} toggleModal={toggleModal} />}
					</div>

				</nav>
			</div>

		</header >
	)
}
