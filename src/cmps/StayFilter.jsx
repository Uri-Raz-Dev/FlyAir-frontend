import { useState, useEffect,useRef } from 'react'
import { SvgIcon } from './Svgicon.jsx'
import { svgService } from '../services/svg.service'
import { Link } from 'react-router-dom'
import Modal from './Modal.jsx';
import { RegionFilter } from './RegionFilter.jsx';

export function StayFilter(// {filterBy,setFilterToEdit}
    ) {
        const filterActive=useRef('')
const regionActive=useRef(false)

    // const [filterToEdit, setFilterToEdit] = useState({...filterBy})

    // useEffect(() => {
    //     onSetFilter(filterToEdit)
    // }, [filterToEdit])

    function handleChange(ev) {
    //     const type = ev.target.type
    //     const field = ev.target.name
    //     let value

    //     switch (type) {
    //         case 'text':
    //         case 'radio':
    //             value = field === 'sortDir' ? +ev.target.value : ev.target.value
    //             if (!filterToEdit.sortDir) filterToEdit.sortDir = 1
    //             break
    //         case 'number':
    //             value = +ev.target.value || ''
    //             break
    //     }
    //     setFilterToEdit({ ...filterToEdit, [field]: value })
        // console.log('filterToEdit:', filterToEdit)
    }

    // function clearFilter() {
    //     setFilterToEdit({ ...filterToEdit, txt: '', minSpeed: '', maxPrice: '' })
    // }

    // function clearSort() {
    //     setFilterToEdit({ ...filterToEdit, sortField: '', sortDir: '' })
    // }

    // const [showModal, setShowModal] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [isPickerOpen, setPickerOpen] = useState(false);

    function  handleCloseModal() {
        setPickerOpen(false)
    }

    function OpenPlacesModal(){
        
        setPickerOpen(true)
    }

    function  handleSelectRegion(region)  {
        region===selectedRegion? setSelectedRegion(''):
        setSelectedRegion(region);
        setPickerOpen(false)
    }

    return (
        // <div classnameName="search-bar">
        //     <div classnameName="search-field">
        //     {/* <label>Where</label> */}
            
        //     <input
        //         type="text"
        //         name="txt"
        //         value={filterToEdit.txt || ''}
        //         placeholder="Search destinations"
        //         onChange={handleChange}
        //     />
        //     </div>
        //     <div classnameName="search-button">
        //         <Link to={`/stay`}><button type="submit"><SvgIcon  iconName={"search"}/></button></Link>
        //     </div>

        // </div>

        <div className="search-filter">

    <a onClick={OpenPlacesModal} href='#' className={`search-filter-item ${regionActive.current} `  }>
        <div>
      <label>Where</label>
      <input type="text" value={selectedRegion} readOnly
                onClick={() => setPickerOpen(true)}  onChange={handleChange} placeholder="Search destinations" />
            
        </div>
    </a>

    <a href='#' className="search-filter-item">
        <div>

      <label>Check in</label>
      <input type="text"  placeholder="Add dates" />
        </div>
    </a>

    <a href='#' className="search-filter-item">
        <div>

      <label>Check out</label>
      <input type="text" placeholder="Add dates" />
        </div>
    </a>

    <a href='#'  className="search-filter-item">
        <div>

      <label>Who</label>
      <input type="text" placeholder="Add guests" />
        </div>
    </a>
<div className='search-btn-container'>
    <button className="search-button">
      <span><SvgIcon iconName="search"/></span>
    </button>

</div>

<Modal show={isPickerOpen} onClose={handleCloseModal}>
<RegionFilter onSelectRegion={handleSelectRegion} />
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
}