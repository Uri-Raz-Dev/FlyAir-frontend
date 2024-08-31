import { useNavigate } from 'react-router-dom'
import { CarouselImages } from './CarouselImages.jsx'
import { SvgIcon } from './Svgicon.jsx'

export function StayPreview({ stay }) {
    const navigate = useNavigate()

    function onClickDetails(ev) {
        console.log('onClickDetails:', stay._id)
        navigate(`/stay/${stay._id}`) // ניווט ידני לפי ה-ID של ה-stay
    }

    return (
        <>
            <div className='card-carousel' onClick={onClickDetails}>
                <CarouselImages imgs={stay.imgurls} />
            </div>

            <div className="card-content">
                <div className='card-content-location'>
                    <p >{stay.location.country}, {stay.location.city}</p>
                </div>
                <div className='card-content-data'>
                    <p>21 miles to Castel National Park</p>
                    {/* <p>   sep 19-25</p> */}
                </div>
                <div className='card-content-price'>
                    <span className='num'>₪{stay.price}  </span>
                    <span> night</span>
                </div>
                <div className='card-content-score'>
                    <span className='star-content'>
                        <SvgIcon iconName={"starReview"} />
                    </span>

                    <span>
                        4.19
                    </span>
                </div>
            </div>
        </>
    )
}
