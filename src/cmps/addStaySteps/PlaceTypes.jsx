
import React from 'react'

import { labels } from '../../services/labels.service'


export function PlaceTypes({ onAddStay, stay, handleChange, selectedType, handleSelect }) {
    return (
        <div className='step-2-container'>
            <h1>Which of these best describes your place?</h1>
            <div className='types-container'>
                {Object.keys(labels).map((label, index) => (
                    <div className={`type-box ${stay.labels.includes(label) ? 'selected' : ''}`} key={index}>
                        <label key={index}>
                            <input
                                type="checkbox"
                                value={label}
                                checked={selectedType === label}
                                onChange={handleSelect}
                            />
                            <div className="stay-labal-item">
                                <img width={24} height={24} src={labels[label]} alt={label} />
                                <span className="label-name">{label}</span>
                            </div>
                        </label>
                    </div>
                ))}
            </div>

            <div className="add-stay-container">
                <h1>Add New Stay</h1>
                {/* <form onSubmit={onAddStay}>
                    <div>
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
                    <div>
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
                    <div>
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
                    <div>
                        <label htmlFor="type">Type:</label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            value={stay.type}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Add Stay</button>
                </form> */}
            </div>
        </div>
    )
}
