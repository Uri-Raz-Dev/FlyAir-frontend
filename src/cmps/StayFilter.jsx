import { useState, useEffect, useRef } from 'react'
import { SvgIcon } from './Svgicon.jsx'
import { svgService } from '../services/svg.service'
import { Link } from 'react-router-dom'
import Modal from './Modal.jsx';
import { RegionFilter } from './RegionFilter.jsx';
import { DatePickerr } from './DatePicker.jsx';

export function StayFilter({ filterBy, onSetFilter }) {

    const filterActive = useRef('')
    const regionActive = useRef(false)

    const [filterToEdit, setFilterToEdit] = useState({ ...filterBy })

    useEffect(() => {
        onSetFilter(filterToEdit)
    }, [filterToEdit])

    function handleChange(ev) {
        console.log('target' , ev.target);
        
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

    // function clearFilter() {
    //     setFilterToEdit({ ...filterToEdit, txt: '', minSpeed: '', maxPrice: '' })
    // }

    // function clearSort() {
    //     setFilterToEdit({ ...filterToEdit, sortField: '', sortDir: '' })
    // }

    // const [showModal, setShowModal] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCheckIn, setSelectedCheckIn] = useState('');
    const [selectedCheckOut, setSelectedCheckOut] = useState('');
    const [isRegionPickerOpen, setRegionPickerOpen] = useState(false);
    const [isDatesPickerOpen, setDatesPickerOpen] = useState(false);



    function handledatesCloseModal() {
        setDatesPickerOpen(false)
    }

    function handleregionsCloseModal() {
        setRegionPickerOpen(false)

    }

    function openRegionsModal() {

        setRegionPickerOpen(true)
    }
    function openDatesModal() {
        setDatesPickerOpen(true)
        // console.log(new Date("2024-09-01"));

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
        // const d=new Date(date)
        const shortMonthName = date.toLocaleString('en-US', { month: 'short' });
        const shortDate = `${date.getDate()} ${shortMonthName}`
        return shortDate
    }
    function handleCheckIn(checkIn) {
        // console.log("checkIn:"+checkIn);
        
        
        const startDate=new Date(checkIn)
        // console.log('startDate'+startDate);
        const miniStartDate = displayDateShortly(startDate)
        setSelectedCheckIn(miniStartDate)
        setFilterToEdit({ ...filterToEdit, startDate })

    }
    function handleCheckOut(checkOut) {
        const endDate=new Date(checkOut)
        const miniEndDate = displayDateShortly(endDate)
        setSelectedCheckOut(miniEndDate)
        setFilterToEdit({ ...filterToEdit, endDate })
    }
    return (


        <div className="search-filter">

            <a onClick={openRegionsModal} href='#' className={`search-filter-item ${regionActive.current} `}>
                <div>
                    <label>Where</label>
                    <input type="text" value={selectedRegion}
                         placeholder="Search destinations" name='region' />

                </div>
            </a>

            <a onClick={openDatesModal} href='#' className="search-filter-item ">
                <div>

                    <label>Check in</label>
                    <input  value={selectedCheckIn} className='check-in' name='startDate' type="text" placeholder="Add dates" />
                </div>
            </a>


            <a onClick={openDatesModal} href='#' className="search-filter-item">
                <div>

                    <label>Check out</label>
                    <input   onChange={handleChange} value={selectedCheckOut} name='endDate' className='check-in' type="text" placeholder="Add dates" />
                </div>
            </a>


            <a href='#' className="search-filter-item">
                <div>

                    <label>Who</label>
                    <input readOnly type="text" placeholder="Add guests" />
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
                <DatePickerr handleCheckIn={handleCheckIn} handleCheckOut={handleCheckOut} />
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