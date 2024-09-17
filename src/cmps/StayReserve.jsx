import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';

// import { saveOrder } from '../store/actions/order.action.js';
import { useSelector } from 'react-redux';
import { orderService } from '../services/order/order.service.js';
import { debounce } from '../services/util.service.js';

export function StayReserve({ stay, orderToEdit, setOrderToEdit, handleChange }) {
    const { _id, name, summary, type, imgurls, price, capacity, amenities, labels, startDate, endDate } = stay || {}
    const { city, country, countryCode, address, lat, lag } = stay?.location || {}
    const { fullname, imgUrl } = stay?.host || {}
    const debounceRef = useRef();
    console.log(type);

    const { stayId } = useParams()
    const orders = useSelector(storeState => storeState.orderModule.orders)
    const { adults, kids, infants, pets } = orderToEdit.guests
    const buttonRef = useRef(null);
    const checkInRef = useRef(null);
    const checkOutRef = useRef(null);
    const guestRef = useRef(null);
    const totalGuests = adults + kids + infants + pets
    const [totalPrice, setTotalPrice] = useState(0)
    const [dayDiff, setDayDiff] = useState(0)

    useEffect(() => {
        if (startDate && endDate) {
            setOrderToEdit(prevOrder => ({
                ...prevOrder,
                startDate: dayjs(startDate).format('MM/DD/YYYY'),
                endDate: dayjs(endDate).format('MM/DD/YYYY')
            }));
        }
    }, [stay, setOrderToEdit]);


    useEffect(() => {
        debounceRef.current = debounce(() => {
            const startDate = dayjs(orderToEdit.startDate, 'MM/DD/YYYY')
            const endDate = dayjs(orderToEdit.endDate, 'MM/DD/YYYY')

            if (!startDate.isValid() || !endDate.isValid()) {
                console.error('Invalid date format.')
                setDayDiff(0)
                setTotalPrice(0)
                return
            }

            const dayDiff = endDate.diff(startDate, 'day');

            // Only charge for additional adults beyond the first
            const additionalAdults = Math.max(0, orderToEdit.guests.adults - 1);
            const adultPrice = 400 * additionalAdults;
            const childPrice = 300 * orderToEdit.guests.kids;
            const infantPrice = 200 * orderToEdit.guests.infants;
            const petPrice = 200 * orderToEdit.guests.pets;
            const serviceFee = price * 0.8;

            // Calculate total price
            const totalPrice = (dayDiff * fee) + serviceFee + adultPrice + childPrice + infantPrice + petPrice

            setDayDiff(dayDiff);
            setTotalPrice(totalPrice);
        }, 300);
    }, [orderToEdit, price]);


    useEffect(() => {
        if (debounceRef.current) {
            debounceRef.current();
        }
    }, [orderToEdit]);

    useEffect(() => {


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

        const buttonElement = buttonRef.current
        buttonElement.addEventListener('mousemove', handleMouseMove)

        return () => {
            buttonElement.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])


    let nights = 5
    let nightsPrice = price * nights
    let serviceFee = price * 0.8

    let fee = price + (Math.max(0, adults - 1) * 40) + (kids * 30) + (infants * 20) + (pets * 20)
    // function calculateOrderPrice() {
    //     const startDate = dayjs(orderToEdit.startDate, 'MM/DD/YYYY')
    //     const endDate = dayjs(orderToEdit.endDate, 'MM/DD/YYYY')

    //     if (!startDate.isValid() || !endDate.isValid()) {
    //         console.error('Invalid date format.')
    //         setDayDiff(0)
    //         setTotalPrice(0)
    //         return
    //     }

    //     const dayDiff = endDate.diff(startDate, 'day')


    //     const adultPrice = 400 * orderToEdit.guests.adults
    //     const childPrice = 300 * orderToEdit.guests.kids
    //     const infantPrice = 200 * orderToEdit.guests.infants
    //     const petPrice = 200 * orderToEdit.guests.pets
    //     const serviceFee = price * 0.8
    //     const totalPrice = (dayDiff * price) + serviceFee + adultPrice + childPrice + infantPrice + petPrice

    //     setDayDiff(dayDiff)
    //     setTotalPrice(totalPrice)
    // }

    return (
        <aside className="stay-reserve">

            <div className="reserve-price">
                <span>
                    ₪{fee}
                </span>
                <span>night</span>
            </div>



            <div className="reserve-form-wrapper">
                <form className="reserve-form"  >

                    <div className="check-in">
                        <label htmlFor="startDate">CHECK-IN</label>
                        <input onChange={handleChange} type="text" name="startDate" id="startDate" ref={checkInRef}
                            value={orderToEdit.startDate || ''} />
                    </div>

                    <div className="checkout">
                        <label htmlFor="endDate">CHECKOUT</label>
                        <input onChange={handleChange} type="text" name="endDate" id="endDate" ref={checkOutRef}
                            value={orderToEdit.endDate || ''} />
                    </div>

                    <div className="guests">
                        <label htmlFor="adults">GUESTS</label>
                        <input onChange={handleChange} type="text" name="adults" id="adults" ref={guestRef}
                            value={orderToEdit.guests.adults} />
                        <input onChange={handleChange} type="text" name="kids" id="kids" ref={guestRef}
                            value={orderToEdit.guests.kids} />
                        <input onChange={handleChange} type="text" name="infants" id="infants" ref={guestRef}
                            value={orderToEdit.guests.infants} />
                        <input onChange={handleChange} type="text" name="pets" id="pets" ref={guestRef}
                            value={orderToEdit.guests.pets} />
                    </div>

                    <Link to={`/book/${stayId}/?startDate=${orderToEdit.startDate}&endDate=${orderToEdit.endDate}&adults=${+orderToEdit.guests.adults}&kids=${+orderToEdit.guests.kids}&infants=${+orderToEdit.guests.infants}&pets=${+orderToEdit.guests.pets}&guests=${+orderToEdit.guests.adults + +orderToEdit.guests.kids + +orderToEdit.guests.infants + +orderToEdit.guests.pets}&nights=${dayDiff}&serviceFee=${serviceFee}&price=${fee}&totalPrice=${totalPrice}`} className='reserve-button' ref={buttonRef}>
                        <span>Reserve</span>
                    </Link>
                </form>
            </div>

            <span className="charge">
                You won't be charged yet
            </span>

            <div className='reserve-info'>
                {(fee > 0 && dayDiff > 0) && (
                    <div>
                        <span>₪{fee} x {dayDiff} nights</span>
                        <span>₪{fee * dayDiff}</span>
                    </div>
                )}

                {(serviceFee > 0) && (
                    <div>
                        <span>Airbnb service fee</span>
                        <span>₪{serviceFee}</span>
                    </div>
                )}
            </div>

            {(totalPrice > 0) && (
                <div className="reserve-total-price">
                    <span>Total</span>
                    <span>₪{totalPrice}</span>
                </div>
            )}
        </aside>
    )
}
