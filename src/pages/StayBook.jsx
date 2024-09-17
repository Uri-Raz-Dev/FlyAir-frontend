import { Link, useLocation, useParams } from "react-router-dom";
import { SvgIcon } from "../cmps/Svgicon";
import { useDispatch, useSelector } from "react-redux";
import { BookDetails } from "../cmps/BookDetails";
import { useEffect, useRef } from "react";
import { loadStay } from "../store/actions/stay.actions";
import { loadOrder } from "../store/actions/order.action";

export function StayBook() {
    const { stayId } = useParams()
    const stay = useSelector(storeState => storeState.stayModule.stay)
    const orders = useSelector(storeState => storeState.orderModule.orders)
    const location = useLocation();


    const queryParams = new URLSearchParams(location.search);
    const startDate = queryParams.get('startDate');
    const endDate = queryParams.get('endDate');
    const nights = queryParams.get('daydiff');
    const serviceFee = queryParams.get('serviceFee');
    const totalPrice = queryParams.get('totalPrice');
    const pets = queryParams.get('pets');
    const guests = queryParams.get('guests');
    useEffect(() => {
        if (stayId) {
            loadStay(stayId)
        }
    }, [stayId])

    const buttonRef = useRef(null)
    const dispatch = useDispatch();



    useEffect(() => {
        const buttonElement = buttonRef.current
        if (!buttonElement) return
        const handleMouseMove = (event) => {
            if (buttonRef.current) {
                const rect = buttonRef.current.getBoundingClientRect()
                const mouseX = event.clientX - rect.left
                const mouseY = event.clientY - rect.top
                const percentX = (mouseX / rect.width) * 100
                const percentY = (mouseY / rect.height) * 100
                buttonRef.current.style.setProperty('--mouse-x', percentX)
                buttonRef.current.style.setProperty('--mouse-y', percentY)
            }
        }

        buttonElement.addEventListener('mousemove', handleMouseMove)

        return () => {
            buttonElement.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])



    function calculateReviewScore() {
        const ratingKeys = ["value", "cleanliness", "communication", "check-in", "accuracy", "location"]

        const totalScores = ratingKeys.reduce((acc, key) => {
            const total = reviews.reduce((sum, review) => sum + review.rate[key], 0) / reviews.length
            return acc + total
        }, 0)

        const totalReviewAvg = totalScores / ratingKeys.length;

        return totalReviewAvg.toFixed(2)
    }

    if (!stay) {
        return <div>Loading...</div>; // Optionally show a loading state
    }

    const { imgurls, reviews, name, summary, price } = stay

    return (
        <main className="staybook-container">
            <header className="header-container">
                <div>Confirm and pay </div>
                <Link className="book-back" to={`/stay/${stayId}`}><SvgIcon iconName="leftlabelarrow" /></Link>
            </header>

            <main className="book-pay-container">
                <div>Your trip</div>
                <div className="dates">
                    <div>Dates</div>
                    <div>{startDate} – {endDate}</div>
                    <div>Edit</div>
                </div>
                <div className="guests">
                    <div>Guests</div>
                    <div>{guests}</div>
                    <div>Edit</div>
                </div>
                <Link to={`/hosting/`} className='reserve-button' ref={buttonRef}>
                    <span>Request to book</span>
                </Link>
            </main>

            <BookDetails imgurls={imgurls} name={name} summary={summary} reviews={reviews} calculateReviewScore={calculateReviewScore} price={price} />

        </main>
    )
}