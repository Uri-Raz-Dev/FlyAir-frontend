import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export function Calendar() {

    const [selectedDateLeft, setSelectedDateLeft] = useState(dayjs())
    const [selectedDateRight, setSelectedDateRight] = useState(dayjs().add(1, 'month'))
    const handleLeftMonthChange = (month) => {

        const newDate = selectedDateLeft.month(month.month());
        setSelectedDateLeft(newDate);

        setSelectedDateRight(newDate.add(1, 'month'));
    }

    const handleRightMonthChange = (month) => {

        const newDate = selectedDateRight.month(month.month())
        setSelectedDateRight(newDate)

        setSelectedDateLeft(newDate.subtract(1, 'month'))
    }

    return (
        <div className="calendar-container">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    className="calendar-left"
                    disablePast={true}
                    sx={{ width: 294, height: 303 }}
                    value={selectedDateLeft}
                    onChange={(newDate) => setSelectedDateLeft(newDate)}
                    onMonthChange={handleLeftMonthChange}
                />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    className="calendar-right"
                    disablePast={true}
                    sx={{ width: 294, height: 303 }}
                    value={selectedDateRight}
                    onChange={(newDate) => setSelectedDateRight(newDate)}
                    onMonthChange={handleRightMonthChange}
                />
            </LocalizationProvider>
        </div>
    )
}

console.log(DateCalendar);
