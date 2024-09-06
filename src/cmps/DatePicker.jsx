import React, { useEffect, useRef, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const DatePickerr = ({ handleCheckIn, handleCheckOut }) => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    useEffect(() => {
        handleCheckIn(state[0].startDate)
        handleCheckOut(state[0].endDate)
    }, [state[0]])




    const datePickerRef = useRef();


    // useEffect(() => {

    //     // If you want to inspect the internal state, you would need to rely on props/state or the component's API
    // }, [state]);
    return (
        <div className="date-picker-container">
            <DateRangePicker ref={datePickerRef}
                onChange={item => setState([item.selection])}
                minDate={new Date()}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
                showDateDisplay={false}
                rangeColors={['rgb(34, 34, 34)']}



            />
            {/* <div className="date-picker-controls">
                <button>Exact dates</button>
                <button>± 1 day</button>
                <button>± 2 days</button>
                <button>± 3 days</button>
                <button>± 7 days</button>
                <button>± 14 days</button>
            </div> */}
        </div>
    );
};

