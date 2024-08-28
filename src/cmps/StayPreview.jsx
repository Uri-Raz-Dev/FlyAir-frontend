import { useNavigate } from 'react-router-dom'
import { CarouselImages } from './CarouselImages.jsx'

export function StayPreview({ stay }) {
    const navigate = useNavigate()

    function onClickDetails() {
        console.log('onClickDetails:', stay._id)
        navigate(`/stay/${stay._id}`) // ניווט ידני לפי ה-ID של ה-stay
    }

    return (
        <>
            <div className='card-carousel' onClick={onClickDetails}>
                <CarouselImages imgs={stay.imgurls} />
            </div>

            <div className="card-content">
                <h3>{stay.location.country}, {stay.location.city}</h3>
                {/* <h3>{stay.name}</h3> */}
                
                <p>21 miles to Castel National Park</p>
                <p>{stay.price}₪ night</p>
                <p>sep 6-10</p>
            </div>
        </>
    )
}
