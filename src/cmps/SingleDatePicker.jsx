import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './SingleDatePicker.scss';

const SingleDatePicker = ({ onDateChange, selectedDate, placeholder }) => {
    const handleDateChange = (date) => {
        onDateChange(date);
    };

    return (
        <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            placeholderText={placeholder}
            className="single-date-picker"
            dateFormat="MMMM d, yyyy"
            minDate={new Date()} // Optional: Prevents selecting past dates
        />
    );
};

export default SingleDatePicker;