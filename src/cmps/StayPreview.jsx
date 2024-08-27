import { Link } from 'react-router-dom'
import { CarouselImages } from './CarouselImages.jsx'
export function StayPreview({ stay }) {
    console.log(stay.imgurls)
    return (
        <>
        
            <div className='card-carousel'>
                <CarouselImages imgs={stay.imgurls} />

            </div>

            <div className="card-content">
                <h3>{stay.loc.country}, {stay.loc.city}</h3>
                {/* <h3>{stay.name}</h3> */}
                <p>21 miles to Castel National Park</p>
                <p>{stay.price}₪ night</p>
                <p>sep  6-10</p>
            </div>
        </>
    )

}