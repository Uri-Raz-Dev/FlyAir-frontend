import { useSelector } from 'react-redux'

export function AppFooter() {
	const count = useSelector(storeState => storeState.userModule.count)

	return (
		// <footer className="app-footer full">
		// 	<p>Coffeerights &copy; 2024</p>
		// 	<p>Count: {count}</p>
            
        //     {import.meta.env.VITE_LOCAL ? 
        //         <span className="local-services">Local Services</span> : 
        //         <span className="remote-services">Remote Services</span>}
		// </footer>

			 <footer className="footer">
<div className="container">
	<p>&copy; 2024 Airbnb, Inc. All rights reserved.</p>
	<div className="footer__links">
		<a href="/privacy">Privacy</a>
		<a href="/terms">Terms</a>
		<a href="/sitemap">Sitemap</a>
	</div>
</div>
</footer> 
)

}