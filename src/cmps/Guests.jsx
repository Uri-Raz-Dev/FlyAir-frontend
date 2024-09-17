import { useState, useRef, useEffect } from "react"

export function Guests({ handleGuestsTree }) {

    const adultsCount = useRef(0)
    const childrensCount = useRef(0)
    const infantsCount = useRef(0)
    const petsCount = useRef(0)

function handlePlusGuests(amoutofGuests){
     amoutofGuests.current++
}
function handleMinusGuests(amoutofGuests){
    amoutofGuests.current--
}

function handleGuestsTree(){
    const adults=adultsCount.current
    const childrens=childrensCount.current
    const infants=infantsCount.current
    const pets=petsCount.current

    handleGuestsTree(adults,childrens,infants,pets)
}

    return (

        <div className="guests-container">

            <div className="guests-layout">

                <div className="guests-card">
                    <div>

                        <h3>Adults</h3>
                        <p>Ages 13 or above</p>

                    </div>

                    <div className="guests-counter">

                        <button onClick={handlePlusGuests(adultsCount.current)}>+</button>
                        <span>{adultsCount.current}</span>
                        {/* <input onChange={handleGuestsTree} ref={adultsCout}>{0}</input> */}
                        <button onClick={handleMinusGuests(adultsCount.current)}>-</button>

                    </div>

                </div>

                <div className="guests-card">

                    <div>

                        <h3>Children</h3>
                        <p>Ages 2-12</p>

                    </div>

                    <div className="guests-counter">

                    <button onClick={handlePlusGuests(childrensCount.current)}>+</button>
                        <span>{childrensCount.current}</span>
                        {/* <input onChange={handleGuestsTree} ref={adultsCout}>{0}</input> */}
                        <button onClick={handleMinusGuests(childrensCount.current)}>-</button>

                    </div>

                </div>

                <div className="guests-card">

                    <div>
                        <h3>Infants</h3>
                        <p>Under 2 </p>

                    </div>

                    <div className="guests-counter">
                    <button onClick={handlePlusGuests(infantsCount.current)}>+</button>
                        <span>{infantsCount.current}</span>
                        {/* <input onChange={handleGuestsTree} ref={adultsCout}>{0}</input> */}
                        <button onClick={handleMinusGuests(infantsCount.current)}>-</button>

                    </div>
                </div>

                <div className="guests-card">
                    <div>
                        <h3>Pets</h3>
                        <p>Home pets</p>
                    </div>

                    <div className="guests-counter">
                    <button onClick={handlePlusGuests(petsCount.current)}>+</button>
                        <span>{petsCount.current|| 0}</span>
                        {/* <input onChange={handleGuestsTree} ref={adultsCout}>{0}</input> */}
                        <button onClick={handleMinusGuests(petsCount.current)}>-</button>

                    </div>

                </div>

            </div>

        </div>

    )
}