import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Link } from 'react-router-dom';

export function StayReserve({ stay }) {
    const { _id, name, summary, type, imgurls, price, capacity, amenities, labels } = stay || {}
    const { city, country, countryCode, address, lat, lag } = stay?.location || {}
    const { fullname, imgUrl } = stay?.host || {}

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

            <div className="reserve-form-wrapper">
                <form >

                    <div className="check-in">
                        <label htmlFor="check-in">CHECK-IN</label>
                        <input type="date" name="check-in" id="check-in" />
                    </div>

                    <div className="checkout">
                        <label htmlFor="checkout">CHECKOUT</label>
                        <input type="date" name="checkout" id="checkout" />
                    </div>

                    <div className="guests">
                        <label htmlFor="guests">GUESTS</label>
                        <input type="text" name="guests" id="guests" value={'1 guest'} />
                    </div>

                </form>
            </div>
            <Link to="/" className='reserve-button'>
                <span to="/">Reserve</span>
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
