
import React from 'react';

export function PropertyType({ selectedType, handleSelect }) {
    return (
        <div className='step-3-container'>
            <h1>What type of place will guests have?</h1>

            <div className='select-property-type'>
                <label key={'an-entire-place'} className={`btn an-entire-place ${selectedType === 'An entire place' ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        value="An entire place"
                        checked={selectedType === 'An entire place'}
                        onChange={handleSelect}
                    />
                    <div className="stay-labal-item">
                        <h2>An entire place</h2>
                        <span className="label-name">Guests have the whole place to themselves.</span>
                    </div>
                </label>

                <label key={'a-room'} className={`btn a-room ${selectedType === 'A room' ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        value="A room"
                        checked={selectedType === 'A room'}
                        onChange={handleSelect}
                    />
                    <div className="stay-labal-item">
                        <h2>A room</h2>
                        <span className="label-name">Guests have their own room in a home, plus access to shared spaces.</span>
                    </div>
                </label>

                <label key={'a-shared-room'} className={`btn a-shared-room ${selectedType === 'A shared room' ? 'selected' : ''}`}>
                    <input
                        type="radio"
                        value="A shared room"
                        checked={selectedType === 'A shared room'}
                        onChange={handleSelect}
                    />
                    <div className="stay-labal-item">
                        <h2>A shared room</h2>
                        <span className="label-name">Guests sleep in a room or common area that may be shared with you or others.</span>
                    </div>
                </label>
            </div>
        </div>
    );
}
