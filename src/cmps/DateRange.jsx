import React, { useState, useEffect,useRef } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme style file

const DateRange = ({ handleCheckIn, handleCheckOut,isCheckIn,isCheckOut }) =>{
    const [state, setState] = useState([
        {
            startDate: '',
            endDate: '',
            key: 'selection'
        }
    ]);

    useEffect(() => {
        if(isCheckIn){
            handleCheckIn(state[0].startDate)
        }
        if(isCheckOut){
            handleCheckOut(state[0].endDate)
        }

    }, [state[0]])

 

    return (
        <div className='date-picker-range'>
            <DateRangePicker
                ranges={state}
                onChange={item => setState([item.selection])}
                months={2}
                direction='horizontal'
                rangeColors={['rgb(34, 34, 34)']}
                minDate={new Date()}
                showDateDisplay={false}
                moveRangeOnFirstSelection={false}
                editableDateInputs={true}
            />

        </div>
    );
};

export default DateRange;


