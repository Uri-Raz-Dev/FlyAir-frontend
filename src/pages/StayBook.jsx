import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { SvgIcon } from "../cmps/Svgicon";
import { useDispatch, useSelector } from "react-redux";
import { BookDetails } from "../cmps/BookDetails";
import { useEffect, useRef, useState } from "react";
import { loadStay } from "../store/actions/stay.actions";
// import { loadOrder, saveOrder } from "../store/actions/order.action";
import { orderService } from "../services/order/order.service";
import { addOrder } from "../store/actions/order.actions";
import Swal from 'sweetalert2'
import { SOCKET_EVENT_REVIEW_ADDED } from "../services/socket.service";

export function StayBook() {
    const { stayId } = useParams()
    const stay = useSelector(storeState => storeState.stayModule.stay)
    const location = useLocation();
    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    const [orderToEdit, setOrderToEdit] = useState(orderService.getEmptyOrder())
    const navigate = useNavigate()
    console.log(stay.imgurls[0])
    const queryParams = new URLSearchParams(location.search)
    const startDate = queryParams.get('startDate')
    const endDate = queryParams.get('endDate')
    const fee = queryParams.get('price')
    const nights = queryParams.get('nights')
    const serviceFee = queryParams.get('serviceFee')
    const totalPrice = queryParams.get('totalPrice')
    const guests = queryParams.get('guests')
    const adults = queryParams.get('adults')
    const kids = queryParams.get('kids')
    const infants = queryParams.get('infants')
    const pets = queryParams.get('pets')
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


    function handleCardDate() {
        let startDates = new Date(startDate)
        let endDates = new Date(endDate)
        let getStartDate = startDates.getDate()
        let getEndDate = endDates.getDate()
        const startDateMonth = startDates.getMonth()
        const endDateMonth = endDates.getMonth()


        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let cardDate = monthNames[startDateMonth] + ' ' + getStartDate + ' - ' + getEndDate

        if (endDateMonth > startDateMonth || endDates.getFullYear() > startDates.getFullYear()) return monthNames[startDateMonth] + ' '
            + getStartDate + ' - ' + monthNames[endDateMonth] + ' ' + getEndDate

        return cardDate
    }

    function onAddOrder(ev) {
        ev.preventDefault();
        try {
            const orderToSave = {
                ...orderToEdit,
                stayId,
                buyerId: loggedInUser._id,
                hostId: stay.host._id,
                startDate,
                endDate,
                totalPrice,
                guests: {
                    adults,
                    kids,
                    infants,
                    pets
                },
                status: 'Upcoming',
                stayImg: stay.imgurls[0]
            }
            orderService.save(orderToSave)

            socketService.emit(SOCKET_NEW_ORDER, {
                hostId: stay.host._id,
                buyerName: loggedInUser.fullname,
                stayName: stay.name,
                totalPrice,
                startDate,
                endDate,
            });

        } catch (err) {
            console.error(err.message)
            showErrorMsg('Failed to save order')
        } finally {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for buying at FlyAir!",
                allowEscapeKey: true,
                showConfirmButton: false,
                timer: 15000,
                iconColor: '#ff385c',
                position: 'center'
            })
            navigate(`/stay`)
        }
    }

    function calculateReviewScore() {
        const ratingKeys = ["value", "cleanliness", "communication", "check-in", "accuracy", "location"]

        const totalScores = ratingKeys.reduce((acc, key) => {
            const total = reviews.reduce((sum, review) => sum + review.rate[key], 0) / reviews.length
            return acc + total
        }, 0)

        const totalReviewAvg = totalScores / ratingKeys.length

        return totalReviewAvg.toFixed(2)
    }

    if (!stay) {
        return <div>Loading...</div>
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
                    <div>{handleCardDate()}</div>
                    <div>Edit</div>
                </div>
                <div className="guests">
                    <div>Guests</div>
                    <div>{guests}</div>
                    <div>Edit</div>
                </div>
                <Link onClick={(ev) => onAddOrder(ev)} to={`/hosting/`} className='reserve-button' ref={buttonRef}>
                    <span>Request to book</span>
                </Link>
            </main>

            <BookDetails imgurls={imgurls} name={name} summary={summary} reviews={reviews} calculateReviewScore={calculateReviewScore} price={price} fee={fee} nights={nights} serviceFee={serviceFee} totalPrice={totalPrice} />

        </main>
    )
}