
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


        </div>
    )
}
