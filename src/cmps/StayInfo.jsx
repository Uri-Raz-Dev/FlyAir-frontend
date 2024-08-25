import { Link } from "react-router-dom"
import { SvgIcon } from "./Svgicon"
import { StayReserve } from "./StayReserve"

export function StayInfo({ stay }) {
    const { _id, name, summary, type, imgurls, price, capacity, amenities, labels } = stay || {}
    const { city, country, countryCode, address, lat, lag } = stay?.location || {}
    const { fullname, imgUrl } = stay?.host || {}

    return (
        <section className='stay-info'>
            <header className="info-header">
                <h2>{summary}</h2>
                <ul>
                    <li>{capacity} guests</li>
                    <li><span> · </span>{Math.floor(capacity / 2)} bedroom </li>
                    <li><span> · </span>{Math.floor(capacity / 2)} bed <span> · </span></li>
                    <li>{Math.floor(capacity / 2)} bath</li>
                </ul>
                <div className="review-info">
                    <div className="review-rating">
                        <span><SvgIcon iconName={"reviewstar"}></SvgIcon>4.78</span>
                    </div>
                    <span> · </span>
                    <Link to="review">1,025 reviews</Link>
                </div>
            </header>
            <StayReserve stay={stay} />

            <section className='about-host'>
                <div className="host-img">
                    <img src={imgUrl} alt="host img" />
                </div>
                <div>
                    <span>Hosted by {fullname}</span>
                    <span>SuperHost · 10 years of hosting</span>
                </div>
            </section>
            <section className="about-host-summary">
                <div className='about-host'>
                    <div className="host-img">
                        <SvgIcon iconName={"superhost"}></SvgIcon>
                    </div>
                    <div>
                        <span>{fullname} is a Superhost</span>
                        <span>Superhosts are experienced, highly rated Hosts.</span>
                    </div>
                </div>
                <div className='about-host'>
                    <div className="host-img">
                        <SvgIcon iconName={"greatlocation"}></SvgIcon>
                    </div>
                    <div>
                        <span>Great location</span>
                        <span>95% of recent guests gave the location a 5-star rating.</span>
                    </div>
                </div>
                <div className='about-host'>
                    <div className="host-img">
                        <SvgIcon iconName={"cancelstay"}></SvgIcon>
                    </div>
                    <div>
                        <span>Free cancellation before Nov 3</span>
                        <span>Get a full refund if you change your mind.</span>
                    </div>
                </div>
            </section>
        </section>
    )
}