import { useState, useEffect } from 'react'
import { SvgIcon } from './Svgicon.jsx'
import { svgService } from '../services/svg.service'

export function StayFilter({ filterBy, onSetFilter }) {
    const [filterToEdit, setFilterToEdit] = useState(structuredClone(filterBy))

    useEffect(() => {
        onSetFilter(filterToEdit)
    }, [filterToEdit])

    function handleChange(ev) {
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
        // console.log('filterToEdit:', filterToEdit)
    }

    function clearFilter() {
        setFilterToEdit({ ...filterToEdit, txt: '', minSpeed: '', maxPrice: '' })
    }

    function clearSort() {
        setFilterToEdit({ ...filterToEdit, sortField: '', sortDir: '' })
    }

    return (
        <div className="search-bar">
            <div className="search-field">
            {/* <label>Where</label> */}
            <input
                type="text"
                name="txt"
                value={filterToEdit.txt}
                placeholder="Search destinations"
                onChange={handleChange}
            />
            </div>
            <div className="search-button">
                <button type="submit"><SvgIcon  iconName={"search"}/></button>
            </div>
        </div>

    )












//     return <section className="stay-filter">
//         <h3>Filter:</h3>
//         <input
//             type="text"
//             name="txt"
//             value={filterToEdit.txt}
//             placeholder="Free text"
//             onChange={handleChange}
//             required
//         />
//         <input
//             type="number"
//             min="0"
//             name="minSpeed"
//             value={filterToEdit.minSpeed}
//             placeholder="min. speed"
//             onChange={handleChange}
//             required
//         />
//         <button
//             className="btn-clear"
//             onClick={clearFilter}>Clear</button>
//         <h3>Sort:</h3>
//         <div className="sort-field">
//             <label>
//                 <span>Speed</span>
//                 <input
//                     type="radio"
//                     name="sortField"
//                     value="speed"
//                     checked={filterToEdit.sortField === 'speed'}
//                     onChange={handleChange}
//                 />
//             </label>
//             <label>
//                 <span>Vendor</span>
//                 <input
//                     type="radio"
//                     name="sortField"
//                     value="vendor"
//                     checked={filterToEdit.sortField === 'vendor'}
//                     onChange={handleChange}
//                 />
//             </label>
//             <label>
//                 <span>Owner</span>
//                 <input
//                     type="radio"
//                     name="sortField"
//                     value="owner"
//                     checked={filterToEdit.sortField === 'owner'}
//                     onChange={handleChange}
//                 />
//             </label>
//         </div>
//         <div className="sort-dir">
//             <label>
//                 <span>Asce</span>
//                 <input
//                     type="radio"
//                     name="sortDir"
//                     value="1"
//                     checked={filterToEdit.sortDir === 1}
//                     onChange={handleChange}
//                 />
//             </label>
//             <label>
//                 <span>Desc</span>
//                 <input
//                     type="radio"
//                     name="sortDir"
//                     value="-1"
//                     onChange={handleChange}
//                     checked={filterToEdit.sortDir === -1}
//                 />
//             </label>
//         </div>
//         <button
//             className="btn-clear"
//             onClick={clearSort}>Clear</button>
//     </section>
}