import React from 'react';

export function ConfirmInfo({ stay, handleChange }) {
    return (
        <div className="step-4-container">
            <h1>Confirm your address</h1>
            <p>Your address is only shared with guests after they've made a reservation.</p>

            {/* <form className="address-form"> */}
            <div className="address-form">


                <div className="input-container">
                    <label htmlFor="name">Stay Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={stay.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="price">Price per Night:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={stay.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="description">Stay description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={stay.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="country">Country/region</label>
                    <select
                        id="country"
                        name="location.country"  // עדכון הקשר נכון לאובייקט location
                        value={stay.location.country}
                        onChange={handleChange}
                    >
                        <option value="">Select Country</option>
                        <option value="Israel">Israel - IL</option>
                        <option value="USA">USA - US</option>
                    </select>
                </div>

                <div className="input-container">
                    <label htmlFor="address">Street address</label>
                    <input
                        type="text"
                        id="address"
                        name="location.address"
                        value={stay.location.address}
                        onChange={handleChange}
                        placeholder="Street address"
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="city">City / town</label>
                    <input
                        type="text"
                        id="city"
                        name="location.city"
                        value={stay.location.city}
                        onChange={handleChange}
                        placeholder="City / town"
                        required
                    />
                </div>
            </div>
            {/* </form> */}
        </div>
    )
}
