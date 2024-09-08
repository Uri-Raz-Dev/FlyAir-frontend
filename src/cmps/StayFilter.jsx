import { useState, useEffect, useRef } from 'react'
import { SvgIcon } from './Svgicon.jsx'
import { svgService } from '../services/svg.service'
import { Link } from 'react-router-dom'
import Modal from './Modal.jsx';
import { RegionFilter } from './RegionFilter.jsx';
import { DatePickerr } from './DatePicker.jsx';
import DateRange from './DateRange.jsx';
import DateRangePickerComponent from './DateRangePickerComponent.jsx';
import { Guests } from './Guests.jsx';
// import '../assets/styles/basics/_helpers.scss';

export function StayFilter({ filterBy, onSetFilter }) {
    const [selectedRegion, setSelectedRegion] = useState('');

    const [selectedCheckIn, setSelectedCheckIn] = useState(null);
    const [selectedCheckOut, setSelectedCheckOut] = useState(null);

    const [checkInFilter, setCheckInFilter] = useState(false)
    const [checkOutFilter, setCheckOutFilter] = useState(false)

    const [isRegionPickerOpen, setRegionPickerOpen] = useState(false);
    const [isDatesPickerOpen, setDatesPickerOpen] = useState(false);
    const [isGuestsOpen, setGuestsOpen] = useState(false);

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)

    const filterActive = useRef('')
    const regionActive = useRef(false)

    const checkOutinputRef = useRef(null)
    const checkIninputRef = useRef(null)
    const regioninputRef = useRef(null)




    const [filterToEdit, setFilterToEdit] = useState({ ...filterBy })

    // const [checkInDate, setCheckInDate] = useState(null);
    // const [checkOutDate, setCheckOutDate] = useState(null);

    // const handleDateChange = (checkIn, checkOut) => {
    //     setCheckInDate(checkIn);
    //     setCheckOutDate(checkOut);

    //     // Close the modal if both dates are selected
    //     if (checkIn && checkOut) {
    //         setIsModalOpen(false);
    //     }
    // };

    useEffect(() => {
        onSetFilter(filterToEdit)
    }, [filterToEdit])


    function handleChange(ev) {
        console.log('target', ev.target);

        const type = ev.target.type
        const field = ev.target.name
        let value

        switch (type) {
            case 'text':
            case 'radio':
                value = field === 'sortDir' ? +ev.target.value : ev.target.value
                if (!filterToEdit.sortDir) filterToEdit.sortDir = 1
                break
            case 'number':
                value = +ev.target.value || ''
                break
        }
        setFilterToEdit({ ...filterToEdit, [field]: value })
        console.log('filterToEdit:', filterToEdit)
    }
    function handleFocus(inputRef) {
        if (inputRef.current) {
            inputRef.current.focus();
        }

    }

    // function clearFilter() {
    //     setFilterToEdit({ ...filterToEdit, txt: '', minSpeed: '', maxPrice: '' })
    // }

    // function clearSort() {
    //     setFilterToEdit({ ...filterToEdit, sortField: '', sortDir: '' })
    // }

    // const [showModal, setShowModal] = useState(false);




    function handledatesCloseModal() {
        setDatesPickerOpen(false)
    }

    function handleregionsCloseModal() {
        setRegionPickerOpen(false)

    }

    function handleCloseGuests(){
        setGuestsOpen(false)
    }

    function openRegionsModal() {
        if (isRegionPickerOpen) {
            setRegionPickerOpen(false)
        }
        else {
            setRegionPickerOpen(true)
        }
        setDatesPickerOpen(false)
        handleFocus(regioninputRef)

    }

    function openCheckInDatesModal() {
        if (isDatesPickerOpen && checkInFilter) {
            setDatesPickerOpen(false)
        }
        else {
            setDatesPickerOpen(true)
        }
        setCheckInFilter(true)
        setCheckOutFilter(false)
        setRegionPickerOpen(false)
        handleFocus(checkIninputRef)
    }
    function openCheckOutDatesModal() {
        if (isDatesPickerOpen && checkOutFilter) {
            setDatesPickerOpen(false)
        }
        else {
            setDatesPickerOpen(true)
        }
        setCheckOutFilter(true)
        setCheckInFilter(false)
        setRegionPickerOpen(false)
        handleFocus(checkOutinputRef)
    }

    function openGuestsModal(){
        setGuestsOpen(true)
    }
    
    function handleSelectRegion(region) {

        if (region === selectedRegion || region === "flexibile") {
            setSelectedRegion('')
            setFilterToEdit({ ...filterToEdit, region: '' })
        }
        else {
            setSelectedRegion(region)
            setFilterToEdit({ ...filterToEdit, region })
        }
        setRegionPickerOpen(false)
    }

    function displayDateShortly(date) {
        const shortMonthName = new Date(date).toLocaleString('en-US', { month: 'short' });
        const shortDate = `${new Date(date).getDate()} ${shortMonthName}`
        return shortDate
    }
    function handleCheckIn(checkIn) {
        console.log(`check in date : ${checkIn}`);

        setSelectedCheckIn(checkIn)
        setFilterToEdit({ ...filterToEdit, startDate: checkIn })
        // setCheckOutFilter(true)
        // handleFocus(checkOutinputRef)
        // handleFocus(checkOutinputRef)
    }
    function handleCheckOut(checkOut) {
        console.log(`check out date : ${checkOut}`);

        setSelectedCheckOut(checkOut)
        setFilterToEdit({ ...filterToEdit, endDate: checkOut })

    }

    function clearDates() {
        setSelectedCheckIn(null)
        setSelectedCheckOut(null)
        setDatesPickerOpen(false)
        setFilterToEdit({ ...filterToEdit, startDate: null, endDate: null })
    }
    return (

        // <div className={isFilterOpen ? "search-filter" : "search-filter active"}>
        <div className='search-filter'>

            <a onClick={openRegionsModal} className={`search-filter-item ${regionActive.current} `}>
                <div>
                    <label>Where</label>
                    <input ref={regioninputRef} onChange={handleChange} type="text" value={selectedRegion}
                        placeholder="Search destinations" name='region' />

                </div>
            </a>

            <a onClick={openCheckInDatesModal} className={`search-filter-item ${checkInFilter ? 'active-filter' : ''}`}>
                <div>

                    <label>Check in</label>
                    <input ref={checkIninputRef} value={selectedCheckIn ? displayDateShortly(selectedCheckIn) : null}
                        className='check-in' name='startDate' type="text" placeholder="Add dates" />
                    {/* <button style={{display:'none'}} onClick={clearDates}>x</button> */}
                </div>
            </a>


            <a onClick={openCheckOutDatesModal} className={`search-filter-item ${checkInFilter ? 'active-filter' : ''}`}>
                <div>

                    <label>Check out</label>
                    <input ref={checkOutinputRef} value={selectedCheckOut ? displayDateShortly(selectedCheckOut) : null} name='endDate'
                        className={`check-in`} type="text" placeholder="Add dates" />
                    {/* <button style={{display:'none'}} onClick={clearDates}>x</button> */}
                </div>
            </a>


            <a onClick={openGuestsModal} href='#' className="search-filter-item">
                <div>

                    <label>Who</label>
                    <input  type="text" placeholder="Add guests" />
                </div>
            </a>

            <div className='search-btn-container'>
                <button className="search-button">
                    <span><SvgIcon iconName="search" /></span>
                </button>
            </div>



            <Modal show={isRegionPickerOpen} onClose={handleregionsCloseModal}>
                <RegionFilter onSelectRegion={handleSelectRegion} />
            </Modal>

            <Modal show={isDatesPickerOpen} onClose={handledatesCloseModal}>
                {/* <DatePickerr handleCheckIn={handleCheckIn} handleCheckOut={handleCheckOut} isCheckIn={checkInFilter.current} isCheckOut={checkOutFilter.current} /> */}
                <DateRange handleCheckIn={handleCheckIn} handleCheckOut={handleCheckOut} isCheckIn={checkInFilter} isCheckOut={checkOutFilter} />
            </Modal>
{/* 
            <Modal show={isGuestsOpen} onClose={handleCloseGuests}>
                <Guests />
            </Modal> */}





        </div>

    )

























    // //     return <section classnameName="stay-filter">
    // //         <h3>Filter:</h3>
    // //         <input
    // //             type="text"
    // //             name="txt"
    // //             value={filterToEdit.txt}
    // //             placeholder="Free text"
    // //             onChange={handleChange}
    // //             required
    // //         />
    // //         <input
    // //             type="number"
    // //             min="0"
    // //             name="minSpeed"
    // //             value={filterToEdit.minSpeed}
    // //             placeholder="min. speed"
    // //             onChange={handleChange}
    // //             required
    // //         />
    // //         <button
    // //             classnameName="btn-clear"
    // //             onClick={clearFilter}>Clear</button>
    // //         <h3>Sort:</h3>
    // //         <div classnameName="sort-field">
    // //             <label>
    // //                 <span>Speed</span>
    // //                 <input
    // //                     type="radio"
    // //                     name="sortField"
    // //                     value="speed"
    // //                     checked={filterToEdit.sortField === 'speed'}
    // //                     onChange={handleChange}
    // //                 />
    // //             </label>
    // //             <label>
    // //                 <span>Vendor</span>
    // //                 <input
    // //                     type="radio"
    // //                     name="sortField"
    // //                     value="vendor"
    // //                     checked={filterToEdit.sortField === 'vendor'}
    // //                     onChange={handleChange}
    // //                 />
    // //             </label>
    // //             <label>
    // //                 <span>Owner</span>
    // //                 <input
    // //                     type="radio"
    // //                     name="sortField"
    // //                     value="owner"
    // //                     checked={filterToEdit.sortField === 'owner'}
    // //                     onChange={handleChange}
    // //                 />
    // //             </label>
    // //         </div>
    // //         <div classnameName="sort-dir">
    // //             <label>
    // //                 <span>Asce</span>
    // //                 <input
    // //                     type="radio"
    // //                     name="sortDir"
    // //                     value="1"
    // //                     checked={filterToEdit.sortDir === 1}
    // //                     onChange={handleChange}
    // //                 />
    // //             </label>
    // //             <label>
    // //                 <span>Desc</span>
    // //                 <input
    // //                     type="radio"
    // //                     name="sortDir"
    // //                     value="-1"
    // //                     onChange={handleChange}
    // //                     checked={filterToEdit.sortDir === -1}
    // //                 />
    // //             </label>
    // //         </div>
    // //         <button
    // //             classnameName="btn-clear"
    // //             onClick={clearSort}>Clear</button>
    // //     </section>
    // //     return <section classnameName="stay-filter">
    // //         <h3>Filter:</h3>
    // //         <input
    // //             type="text"
    // //             name="txt"
    // //             value={filterToEdit.txt}
    // //             placeholder="Free text"
    // //             onChange={handleChange}
    // //             required
    // //         />
    // //         <input
    // //             type="number"
    // //             min="0"
    // //             name="minSpeed"
    // //             value={filterToEdit.minSpeed}
    // //             placeholder="min. speed"
    // //             onChange={handleChange}
    // //             required
    // //         />
    // //         <button
    // //             classnameName="btn-clear"
    // //             onClick={clearFilter}>Clear</button>
    // //         <h3>Sort:</h3>
    // //         <div classnameName="sort-field">
    // //             <label>
    // //                 <span>Speed</span>
    // //                 <input
    // //                     type="radio"
    // //                     name="sortField"
    // //                     value="speed"
    // //                     checked={filterToEdit.sortField === 'speed'}
    // //                     onChange={handleChange}
    // //                 />
    // //             </label>
    // //             <label>
    // //                 <span>Vendor</span>
    // //                 <input
    // //                     type="radio"
    // //                     name="sortField"
    // //                     value="vendor"
    // //                     checked={filterToEdit.sortField === 'vendor'}
    // //                     onChange={handleChange}
    // //                 />
    // //             </label>
    // //             <label>
    // //                 <span>Owner</span>
    // //                 <input
    // //                     type="radio"
    // //                     name="sortField"
    // //                     value="owner"
    // //                     checked={filterToEdit.sortField === 'owner'}
    // //                     onChange={handleChange}
    // //                 />
    // //             </label>
    // //         </div>
    // //         <div classnameName="sort-dir">
    // //             <label>
    // //                 <span>Asce</span>
    // //                 <input
    // //                     type="radio"
    // //                     name="sortDir"
    // //                     value="1"
    // //                     checked={filterToEdit.sortDir === 1}
    // //                     onChange={handleChange}
    // //                 />
    // //             </label>
    // //             <label>
    // //                 <span>Desc</span>
    // //                 <input
    // //                     type="radio"
    // //                     name="sortDir"
    // //                     value="-1"
    // //                     onChange={handleChange}
    // //                     checked={filterToEdit.sortDir === -1}
    // //                 />
    // //             </label>
    // //         </div>
    // //         <button
    // //             classnameName="btn-clear"
    // //             onClick={clearSort}>Clear</button>
    // //     </section>
}