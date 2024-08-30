import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Link } from 'react-router-dom';
import { Calendar } from './Calendar';
import { useEffect, useRef } from 'react';

export function StayReserve({ stay }) {
    const { _id, name, summary, type, imgurls, price, capacity, amenities, labels } = stay || {}
    const { city, country, countryCode, address, lat, lag } = stay?.location || {}
    const { fullname, imgUrl } = stay?.host || {}

    const buttonRef = useRef(null);

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
    let totalPrice = nightsPrice + serviceFee





    return (
        <aside className="stay-reserve">

            <div className="reserve-price">
                <span>₪{price}</span>
                <span>night</span>
            </div>


            <Calendar />

            <div className="reserve-form-wrapper">
                <form >

                    <div className="check-in">
                        <label htmlFor="check-in">CHECK-IN</label>
                        <input type="text" name="check-in" id="check-in" />
                    </div>

                    <div className="checkout">
                        <label htmlFor="checkout">CHECKOUT</label>
                        <input type="text" name="checkout" id="checkout" />
                    </div>

                    <div className="guests">
                        <label htmlFor="guests">GUESTS</label>
                        <input type="text" name="guests" id="guests" />
                    </div>

                </form>
            </div>
            <Link to="/" className='reserve-button' ref={buttonRef}>
                <span>Reserve</span>
            </Link>

            <span className="charge">
                You won't be charged yet
            </span>

            <div className='reserve-info'>
                <div>
                    <span>₪{price} x {nights} nights</span>
                    <span>₪{nightsPrice}</span>
                </div>

                <div>
                    <span>Airbnb service fee</span>
                    <span>₪{serviceFee}</span>
                </div>
            </div>

            <div className="reserve-total-price">
                <span>Total</span>
                <span>₪{totalPrice}</span>
            </div>
        </aside>
    )
}
