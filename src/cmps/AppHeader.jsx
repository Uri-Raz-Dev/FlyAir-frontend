import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import { StayFilter } from './StayFilter.jsx'
import { RxHamburgerMenu } from "react-icons/rx";

export function AppHeader() {
	const user = useSelector(storeState => storeState.userModule.user)

	const [isNavOpen, setIsNavOpen] = useState(false);

	function toggleNav() {
		setIsNavOpen(!isNavOpen)
	}

	const navigate = useNavigate()
	async function onLogout() {
		try {
			await logout()
			navigate('/')
			showSuccessMsg(`Bye now`)
		} catch (err) {
			showErrorMsg('Cannot logout')
		}
	}

	return (
		<div className= "app-header full" >
			<Link to={"stay/"} >FlyAir</Link>
			<Link to={"stay/"} >switch to host  </Link>  {/* //new user will show "airbnb your home" */}
			<button className='lang' >lang-list </button>
			{/* <button className='user-app-header'>user</button> */}
			<div>
				<RxHamburgerMenu onClick={ toggleNav } />
				{isNavOpen && <NavBar />}
			</div>

		</div>
	)
}
