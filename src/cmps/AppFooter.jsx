import { Link, useLocation } from "react-router-dom";
import { SvgIcon } from "./Svgicon";
import { useState } from "react";

export function AppFooter() {
	const [activeTab, setActiveTab] = useState("explore");
	const location = useLocation();
	const isLocation = location.pathname.startsWith(`/stay/s`);

	// פונקציה לעדכון הכפתור הפעיל כאשר לוחצים על כפתור
	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<footer>
			<div className={isLocation ? "app-footer details full" : "app-footer full"}>
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
					<Link to="/" className="language-link">
						<SvgIcon iconName={"language"}></SvgIcon>
					</Link>
					<Link to="/">English(US)</Link>
					<Link to="/">₪ ILS</Link>
					<Link to="/">Support & resouces</Link>
				</div>
			</div>

			<div className="footer-nav-mobail">
				<Link
					to="stay"
					className={`nav-btn stay-btn ${activeTab === "explore" ? "active" : ""}`}
					onClick={() => handleTabClick("explore")}
				>
					<SvgIcon iconName={"explore"} className="icon"></SvgIcon>Explore
				</Link>
				<Link
					to="wishlists"
					className={`nav-btn wishlists-btn ${activeTab === "wishlists" ? "active" : ""}`}
					onClick={() => handleTabClick("wishlists")}
				>
					<SvgIcon iconName={"wishlists"} className="icon"></SvgIcon>Wishlists
				</Link>
				<Link
					to="trips"
					className={`nav-btn trips-btn ${activeTab === "trips" ? "active" : ""}`}
					onClick={() => handleTabClick("trips")}
				>
					<SvgIcon iconName={"trips"} className="icon"></SvgIcon>Trips
				</Link>
				<Link
					to="messages"
					className={`nav-btn messages-btn ${activeTab === "messages" ? "active" : ""}`}
					onClick={() => handleTabClick("messages")}
				>
					<SvgIcon iconName={"messagesIcon"} className="icon"></SvgIcon>Messages
				</Link>
				<Link
					to="menu"
					className={`nav-btn profile-btn ${activeTab === "profile" ? "active" : ""}`}
					onClick={() => handleTabClick("profile")}
				>
					<SvgIcon iconName={"profileIconMainAppFooter"} className="icon"></SvgIcon>Profile
				</Link>
			</div>
		</footer>
	);
}



// import { useSelector } from 'react-redux';
// import { SvgIcon } from './Svgicon';
// import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';

// export function AppFooter() {
// 	const [activeTab, setActiveTab] = useState('explore'); // שמור את הכפתור הפעיל ב-state
// 	const count = useSelector((storeState) => storeState.userModule.count);
// 	const location = useLocation();
// 	const isLocation = location.pathname.startsWith(`/stay/s`);

// 	// פונקציה לעדכון הכפתור הפעיל כאשר לוחצים על כפתור
// 	const handleTabClick = (tabName) => {
// 		setActiveTab(tabName);
// 	};

// 	return (
// 		<footer>
// 			<div className={isLocation ? 'app-footer details full' : 'app-footer full'}>

// 				<div className="footer-help">
// 					<span>&copy; 2024 FlyAir, Inc.</span>
// 					<span>.</span>
// 					<Link to="/">Terms</Link>
// 					<span>.</span>
// 					<Link to="/">Sitemap</Link>
// 					<span>.</span>
// 					<Link to="/">Privacy</Link>
// 					<span>.</span>
// 					<Link to="/">Your Privacy Choices</Link>
// 				</div>

// 				<div className="footer-support">
// 					<Link to="/" className='language-link'><SvgIcon iconName={"language"}></SvgIcon></Link>
// 					<Link to="/">English(US)</Link>
// 					<Link to="/">₪ ILS</Link>
// 					<Link to="/">Support & resouces</Link>
// 				</div>
// 			</div>





// 			<div className="footer-nav-mobail">
// 				<Link
// 					to="stay"
// 					className={`nav-btn stay-btn ${activeTab === 'explore' ? 'active' : ''}`}
// 					onClick={() => handleTabClick('explore')}
// 				>
// 					<SvgIcon iconName={'explore'} className="icon"></SvgIcon>Explore
// 				</Link>
// 				<Link
// 					to="wishlists"
// 					className={`nav-btn wishlists-btn ${activeTab === 'wishlists' ? 'active' : ''}`}
// 					onClick={() => handleTabClick('wishlists')}
// 				>
// 					<SvgIcon iconName={'wishlists'} className="icon"></SvgIcon>Wishlists
// 				</Link>
// 				<Link
// 					to="trips"
// 					className={`nav-btn trips-btn ${activeTab === 'trips' ? 'active' : ''}`}
// 					onClick={() => handleTabClick('trips')}
// 				>
// 					<SvgIcon iconName={'trips'} className="icon"></SvgIcon>Trips
// 				</Link>
// 				<Link
// 					to="messages"
// 					className={`nav-btn messages-btn ${activeTab === 'messages' ? 'active' : ''}`}
// 					onClick={() => handleTabClick('messages')}
// 				>
// 					<SvgIcon iconName={'messagesIcon'} className="icon"></SvgIcon>Messages
// 				</Link>
// 				<Link
// 					to="menu"
// 					className={`nav-btn profile-btn ${activeTab === 'profile' ? 'active' : ''}`}
// 					onClick={() => handleTabClick('profile')}
// 				>
// 					<SvgIcon iconName={'profileIconMainAppFooter'} className="icon"></SvgIcon>Profile
// 				</Link>
// 			</div>
// 		</footer>
// 	);
// }



// import { useSelector } from 'react-redux'
// import { SvgIcon } from './Svgicon'
// import { Link, useLocation } from 'react-router-dom'

// export function AppFooter() {
// 	const count = useSelector(storeState => storeState.userModule.count)
// 	const location = useLocation()
// 	const isLocation = location.pathname.startsWith(`/stay/s`)
// 	return (
// 		<footer className={isLocation ? "app-footer details full" : "app-footer full"}>
// 			{/* <div className="footer-help">
// 				<span>&copy; 2024 FlyAir, Inc.</span>
// 				<span>.</span>
// 				<Link to="/">Terms</Link>
// 				<span>.</span>
// 				<Link to="/">Sitemap</Link>
// 				<span>.</span>
// 				<Link to="/">Privacy</Link>
// 				<span>.</span>
// 				<Link to="/">Your Privacy Choices</Link>
// 			</div> */}

// 			{/* <div className="footer-support">
// 				<Link to="/" className='language-link'><SvgIcon iconName={"language"}></SvgIcon></Link>
// 				<Link to="/">English(US)</Link>
// 				<Link to="/">₪ ILS</Link>
// 				<Link to="/">Support & resouces</Link>
// 			</div> */}
// 			{/* <span></span>
// 				<span></span>
// 				<span></span> */}

// 			<div className="footer-nav-mobail">


// 				<Link
// 					to="stay"
// 					className={`nav-btn stay-btn`}
// 				>
// 					<SvgIcon iconName={"explore"} className="icon"></SvgIcon>Explore
// 				</Link>
// 				<Link
// 					to="wishlists"
// 					className={`nav-btn wishlists-btn`}
// 				>
// 					<SvgIcon iconName={"wishlists"} className="icon"></SvgIcon>Wishlists
// 				</Link>
// 				<Link
// 					to="trips"
// 					className={`nav-btn trips-btn`}
// 				>
// 					<SvgIcon iconName={"trips"} className="icon"></SvgIcon>Trips
// 				</Link>
// 				<Link
// 					to="messages"
// 					className={`nav-btn messages-btn`}
// 				>
// 					<SvgIcon iconName={"messagesIcon"} className="icon"></SvgIcon>Messages
// 				</Link>
// 				<Link
// 					to="menu"
// 					className={`nav-btn profile-btn`}
// 				>
// 					<SvgIcon iconName={"profileIconMainAppFooter"} className="icon"></SvgIcon>Profile
// 				</Link>

// 			</div>



// 		</footer>
// 	)
// }



// {/* <div className="">


// 	<Link
// 		to="stay"
// 		className={`nav-btn stay-btn`}
// 	>
// 		<SvgIcon iconName={"explore"} className="icon"></SvgIcon>Explore
// 	</Link>
// 	<Link
// 		to="wishlists"
// 		className={`nav-btn wishlists-btn`}
// 	>
// 		<SvgIcon iconName={"wishlists"} className="icon"></SvgIcon>Wishlists
// 	</Link>
// 	<Link
// 		to="trips"
// 		className={`nav-btn trips-btn`}
// 	>
// 		<SvgIcon iconName={"trips"} className="icon"></SvgIcon>Listings
// 	</Link>
// 	<Link
// 		to="messages"
// 		className={`nav-btn messages-btn`}
// 	>
// 		<SvgIcon iconName={"messagesIcon"} className="icon"></SvgIcon>Messages
// 	</Link>
// 	<Link
// 		to="menu"
// 		className={`nav-btn profile-btn`}
// 	>
// 		<SvgIcon iconName={"profileIcon"} className="icon"></SvgIcon>Profile
// 	</Link>

// </div> */}
