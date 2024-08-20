import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import { StayFilter } from './StayFilter.jsx'

export function AppHeader() {
	const user = useSelector(storeState => storeState.userModule.user)
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
		<header className="app-header full">
			<nav className='flex'>
				<Link to={"/"} >FlyAir</Link>
				<StayFilter />
				<Link to={"/"}>switch to host </Link>  {/* //new user will show "airbnb your home" */}
				<button className='lang'>lang-list</button>
				<button className='user-app-header'>user</button>
			</nav>
		</header>
	)
}
