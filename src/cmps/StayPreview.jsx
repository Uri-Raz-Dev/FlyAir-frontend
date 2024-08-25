import { Link } from 'react-router-dom'
import { CarouselImages } from './CarouselImages.jsx'
export function StayPreview({ stay }) {
    return (
        <>
            <div className='card-carousel'>
                <CarouselImages />

            </div>

            <div className="card-content">
                <h3>{stay.name}</h3>
                <p>{stay.type}</p>
            </div>
        </>
    )

}