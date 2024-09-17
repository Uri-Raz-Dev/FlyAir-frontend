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
import { CalendarPicker } from './CalendarPicker.jsx';
import { GuestsModal } from './GuestsModal.jsx';
// import '../assets/styles/basics/_helpers.scss';

export function StayFilter({ filterBy, onSetFilter }) {
    const [selectedRegion, setSelectedRegion] = useState('');

    const [selectedCheckIn, setSelectedCheckIn] = useState(null);
    const [selectedCheckOut, setSelectedCheckOut] = useState(null);

    const [checkInFilter, setCheckInFilter] = useState(false)
    const [checkOutFilter, setCheckOutFilter] = useState(false)
    const [adultsAmount, setAdultsAmount] = useState(0);
    const [childrenAmount, setChildrenAmount] = useState(0);
    const [infantsAmount, setInfantsAmount] = useState(0);
    const [petsAmount, setPetsAmount] = useState(0);

    const [guestsTree, setGuestTree] = useState({
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
    })

    // const [selectedGuests, setSelectedGuests] = useState(0);


    const [isRegionPickerOpen, setRegionPickerOpen] = useState(false);
    const [isDatesPickerOpen, setDatesPickerOpen] = useState(false);
    const [isGuestsOpen, setGuestsOpen] = useState(false);



    const filterActive = useRef('')
    const regionActive = useRef(false)

    const checkOutinputRef = useRef(null)
    const checkIninputRef = useRef(null)
    const regioninputRef = useRef(null)
    const guestsinputRef = useRef(null)



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

    function handleCloseGuests() {
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

    function openGuestsModal() {
        setGuestsOpen(true)
        setRegionPickerOpen(false)
        setDatesPickerOpen(false)
        handleFocus(guestsinputRef)

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

    function handleGuestsTree(adults, children, infants, pets, type, operation) {
        var dec = 1
        if (type === 'adults') {
            if (operation === 'increment') {
                dec = 1
            }
            else dec = -1
            setGuestTree({ ...guestsTree, adults: adults + dec, children: children, infants: infants, pets: pets })
        }
        else if (type === 'children') {
            if (operation === 'increment') {
                dec = 1
            }
            else dec = -1
            setGuestTree({ ...guestsTree, adults: adults, children: children + dec, infants: infants, pets: pets })
        }
        else if (type === 'infants') {
            if (operation === 'increment') {
                dec = 1
            }
            else dec = -1
            setGuestTree({ ...guestsTree, adults: adults, children: children, infants: infants + dec, pets: pets })
        }
        else if (type === 'pets') {
            if (operation === 'increment') {
                dec = 1
            }
            else dec = -1
            setGuestTree({ ...guestsTree, adults: adults, children: children, infants: infants, pets: pets + dec })

        }
    }
    function handleAmountChange(type, operation) {
        switch (type) {
            case "adults":
                setAdultsAmount((prevAmount) =>
                    operation === "increment"
                        ? prevAmount + 1
                        : prevAmount > 0
                            ? prevAmount - 1
                            : 0
                );
                break;
            case "children":
                setChildrenAmount((prevAmount) =>
                    operation === "increment"
                        ? prevAmount + 1
                        : prevAmount > 0
                            ? prevAmount - 1
                            : 0
                );
                break;
            case "infants":
                setInfantsAmount((prevAmount) =>
                    operation === "increment"
                        ? prevAmount + 1
                        : prevAmount > 0
                            ? prevAmount - 1
                            : 0
                );
                break;
            case "pets":
                setPetsAmount((prevAmount) =>
                    operation === "increment"
                        ? prevAmount + 1
                        : prevAmount > 0
                            ? prevAmount - 1
                            : 0
                );
                break;
            default:
                break;
        }

        handleGuestsTree(adultsAmount, childrenAmount, infantsAmount, petsAmount, type, operation)

        

        // if (type === 'adults') {
        //     setGuestTree((prevguestsTree) =>
        //         prevguestsTree.adults + 1
        //     )

        // }

        // if (type === 'children') {
        //     setGuestTree({ ...guestsTree, children: childrenAmount })

        // }

        // if (type === 'infants') {
        //     setGuestTree({ ...guestsTree, infants: infantsAmount })

        // }

        // if (type === 'pets') {
        //     setGuestTree({ ...guestsTree, pets: petsAmount })

        // }
        // setSelectedGuests((prev) => {
        //     if (operation === "increment") {
        //         return prev + 1;
        //     } else {
        //         return prev > 0 ? prev - 1 : 0;
        //     }
        // });
    }

    function showGuestsValue(guestsTree) {

        const adults = guestsTree.adults > 0 ? guestsTree.adults : 0
        const children = guestsTree.children > 0 ? guestsTree.children : 0
        const adultsChildrenInt = adults + children
        const adultsAndChildren = (adultsChildrenInt) === 0 ? '' : `${adultsChildrenInt} guests`
        // const adultsAndChildren =  (``+(guestsTree.adults + guestsTree.children)) || ``
        // const guests = adultsAndChildren? ` ${adultsAndChildren} guests ` :``
        const infants = guestsTree.infants ? `${'' + guestsTree.infants} infants` : ''
        const pets = guestsTree.pets ? `${'' + guestsTree.pets} pets` : ''
        const str = `${adultsAndChildren} ${infants} ${pets}`
        console.log(str);

        return (

            // ` ${guests} ${infants} ${pets}  `
            str

        )

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

    function updateGuestsFilter(){
setFilterToEdit({
            ...filterToEdit, guests: {
                ...filterToEdit.guests, adults: guestsTree.adults
                , children: guestsTree.children, infants: guestsTree.infants, pets: guestsTree.pets,
            }
        })

// setFilterToEdit({
//             ...filterToEdit, guests: {
//                 ...filterToEdit.guests, adults:adultsAmount
//                 , children: childrenAmount, infants:infantsAmount, pets: petsAmount,
//             }
//         })
    }

    // console.log({selectedGuests});
    console.log(guestsTree);
    console.log(filterToEdit);

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
                    {/* <input ref={guestsinputRef} value={`${selectedGuests } guests`} type="text" placeholder="Add guests" /> */}
                    <input onChange={updateGuestsFilter} ref={guestsinputRef} value={showGuestsValue(guestsTree)} type="text" placeholder="Add guests" />
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
                {/* <CalendarPicker/> */}
                <DateRange handleCheckIn={handleCheckIn} handleCheckOut={handleCheckOut} isCheckIn={checkInFilter} isCheckOut={checkOutFilter} />
            </Modal>

            <Modal show={isGuestsOpen} onClose={handleCloseGuests}>
                {/* <Guests handleGuestsTree={handleGuestsTree} /> */}
                <GuestsModal adultsAmount={adultsAmount}
                    childrenAmount={childrenAmount}
                    infantsAmount={infantsAmount}
                    petsAmount={petsAmount}
                    handleAmountChange={handleAmountChange} />
            </Modal>





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