import { useSelector } from 'react-redux'
import { SvgIcon } from './Svgicon'
import { Link } from 'react-router-dom'

export function AppFooter() {
	const count = useSelector(storeState => storeState.userModule.count)

	return (
		<footer className="app-footer full">
			<div className="footer-help">
				<span>&copy; 2024 FlyAir, Inc.</span>
				<span>.</span>
				<Link to="/">Terms</Link>
				<span>.</span>
				<Link to="/">Sitemap</Link>
				<span>.</span>
				<Link to="/">Privacy</Link>
				<span>.</span>
				<Link to="/">Your Privacy Choices</Link>
			</div>

			<div className="footer-support">
				<Link to="/" className='language-link'><SvgIcon iconName={"language"}></SvgIcon></Link>
				<Link to="/">English(US)</Link>
				<Link to="/">₪ ILS</Link>
				<Link to="/">Support & resouces</Link>
				{/* <span></span>
				<span></span>
				<span></span> */}
			</div>




		</footer>
	)
}