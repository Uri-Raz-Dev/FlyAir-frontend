import { useEffect } from "react";
import { useLocation } from "react-router";

export function GuestsModal({
    adultsAmount, childrenAmount, infantsAmount, petsAmount,
    handleAmountChange }) {
    const location = useLocation()
    const isDetails = location.pathname.startsWith(`/stay/6`)

    return (
        <section className={isDetails ? 'add-guests-modal details' : 'add-guests-modal'} onClick={(ev) => { ev.preventDefault() }}>
            <div>
                <h2>Adults</h2>
                <p className='add-guests-modal-p'>Ages 13 or above</p>
            </div>
            <div className='add-guests-modal-btns'>
                <button className={`add-guest-btn ${adultsAmount === 0 ? 'disabled' : ''}`} onClick={(ev) => {
                    handleAmountChange('adults', 'decrement')
                }}>
                    <span>-</span>
                </button>
                <span className="add-guest-num">{adultsAmount}</span>
                <button className="add-guest-btn" onClick={(ev) => {
                    handleAmountChange('adults', 'increment')
                }}>
                    <span>+</span>
                </button>
            </div>

            <div>
                <h2>Children</h2>
                <p className='add-guests-modal-p'>Ages 2-12</p>
            </div>

            <div className='add-guests-modal-btns'>
                <button className={`add-guest-btn ${childrenAmount === 0 ? 'disabled' : ''}`} onClick={() => { isDetails ? handleAmountChange('kids', 'decrement') : handleAmountChange('children', 'decrement') }}>
                    <span>-</span>
                </button>
                <span className="add-guest-num">{childrenAmount}</span>
                <button className="add-guest-btn" onClick={() => { isDetails ? handleAmountChange('kids', 'increment') : handleAmountChange('children', 'increment') }}>
                    <span>+</span>
                </button>
            </div>

            <div>
                <h2>Infants</h2>
                <p className='add-guests-modal-p'>Under 2</p>
            </div>
            <div className='add-guests-modal-btns'>
                <button className={`add-guest-btn ${infantsAmount === 0 ? 'disabled' : ''}`} onClick={() => { handleAmountChange('infants', 'decrement') }}>
                    <span>-</span>
                </button>
                <span className="add-guest-num">{infantsAmount}</span>
                <button className="add-guest-btn" onClick={() => { handleAmountChange('infants', 'increment') }}>
                    <span>+</span>
                </button>
            </div>
            <div>
                <h2>Pets</h2>
                <a href='#' className='add-guests-modal-p pet'>Bringing a service animal?</a>
            </div>
            <div className='add-guests-modal-btns'>
                <button className={`add-guest-btn ${petsAmount === 0 ? 'disabled' : ''}`} onClick={() => { handleAmountChange('pets', 'decrement') }}>
                    <span>-</span>
                </button>
                <span className="add-guest-num">{petsAmount}</span>
                <button className="add-guest-btn" onClick={() => { handleAmountChange('pets', 'increment') }}>
                    <span>+</span>
                </button>
            </div>
        </section>
    );
}