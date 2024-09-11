import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
// import './DateRangePicker.scss';

const DateRangePickerComponent = ({ onDateChange, checkInDate, checkOutDate }) => {
    const [isSelectingCheckIn, setIsSelectingCheckIn] = useState(true);

    const handleSelect = (ranges) => {
        const { selection } = ranges;

        if (isSelectingCheckIn) {
            onDateChange(selection.startDate, null);
            setIsSelectingCheckIn(false); // Now prompt for check-out date
        } else {
            onDateChange(checkInDate, selection.endDate);
            setIsSelectingCheckIn(true); // Reset to prompt for check-in date next time
        }
    };

    return (
        <DateRange
            ranges={[{
                startDate: isSelectingCheckIn ? new Date() : checkInDate,
                endDate: isSelectingCheckIn ? checkOutDate : null,
                key: 'selection',
            }]}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            rangeColors={['#ff385c']}
            minDate={new Date()}
            className="date-range-picker"
            months={2}
            direction='horizontal'
            showDateDisplay={false}
        />
    );
};

export default DateRangePickerComponent;