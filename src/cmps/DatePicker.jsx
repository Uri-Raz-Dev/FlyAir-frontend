import React, { useEffect, useRef, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const DatePickerr = ({ handleCheckIn, handleCheckOut }) => {
    // const [state, setState] = useState([
    //     {
    //         startDate: new Date(),
    //         endDate: null,
    //         key: 'selection'
    //     }
    // ]);



    // useEffect(()=>{
    // handleCheckIn(state[0].startDate)
    // handleCheckOut(state[0].endDate)
    // },[state[0]])

    const datePickerRef = useRef();

    // console.log(state[0]);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
  
    const handleDatesChange = ({ startDate, endDate }) => {
      setStartDate(startDate);
      setEndDate(endDate);
    };
  
    const handleFocusChange = (focusedInput) => {
      setFocusedInput(focusedInput);
    };
  
    const isOutsideRange = (day) => {
      // Example: Disable dates before today
      return day.isBefore(new Date(), 'day');
    };
  

    // useEffect(() => {

    //     // If you want to inspect the internal state, you would need to rely on props/state or the component's API
    // }, [state]);
    return (
        <div className="date-picker-container">
            <DateRangePicker ref={datePickerRef}
            //     onChange={item =>{
            //         setState([item.selection])}
            // }
            //     showSelectionPreview={false}
            //     moveRangeOnFirstSelection={false}
            //     months={2}
            //     ranges={state}
            //     direction="horizontal"
            //     rangeColors={['#ff385c']}
            startDate={startDate} // Start date of the range
            startDateId="start_date_id"
            endDate={endDate} // End date of the range
            endDateId="end_date_id"
            onDatesChange={handleDatesChange} // Function to handle date changes
            focusedInput={focusedInput} // Which input (start date or end date) is focused
            onFocusChange={handleFocusChange} // Handle focus changes
            displayFormat="MM/DD/YYYY" // Format of the displayed date
            numberOfMonths={2} // Show 2 months in the calendar view
            // isOutsideRange={isOutsideRange} // Disable dates outside this range
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

