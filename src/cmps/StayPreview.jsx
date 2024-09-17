import { useNavigate } from 'react-router-dom'
import { CarouselImages } from './CarouselImages.jsx'
import { SvgIcon } from './Svgicon.jsx'

export function StayPreview({ stay }) {
    const navigate = useNavigate()
    const { reviews } = stay || {}
    console.log(stay.startDate);

    function onClickDetails(ev) {
        navigate(`/stay/${stay._id}`) // ניווט ידני לפי ה-ID של ה-stay
    }
    function calculateReviewScore() {
        const ratingKeys = ["value", "cleanliness", "communication", "check-in", "accuracy", "location"]

        const totalScores = ratingKeys.reduce((acc, key) => {
            const total = reviews.reduce((sum, review) => sum + review.rate[key], 0) / reviews.length
            return acc + total
        }, 0)

        const totalReviewAvg = totalScores / ratingKeys.length;

        return totalReviewAvg.toFixed(2)
    }


    function handleCardDate() {
        let startDate = new Date(stay.startDate)
        let endDate = new Date(stay.endDate)
        let getStartDate = startDate.getDate()
        let getEndDate = endDate.getDate()
        const startDateMonth = startDate.getMonth()
        const endDateMonth = endDate.getMonth()


        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let cardDate = monthNames[startDateMonth] + ' ' + getStartDate + ' - ' + getEndDate

        if (endDateMonth > startDateMonth || endDate.getFullYear() > startDate.getFullYear()) return monthNames[startDateMonth] + ' '
            + getStartDate + ' - ' + monthNames[endDateMonth] + ' ' + getEndDate

        return cardDate
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
                    {/* <p>21 miles to Castel National Park</p> // TODO implement Goggle Maps */}
                    <p>{handleCardDate()}</p>
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
                        {calculateReviewScore()}
                    </span>
                </div>
            </div>
        </>
    )
}
