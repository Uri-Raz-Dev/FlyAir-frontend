import { useState, useEffect,useRef } from 'react'
import { regionUrls } from '../services/filter.service.js'
export function RegionFilter({onSelectRegion}){


return(
<div className='regions-picker'>
<div className='regoins-header'>Search by region </div>
<div className='regions-container' >

    {Object.keys(regionUrls).map( (regionName,index)=>
    <a onClick={() => onSelectRegion(regionName)} key={index} className='region-card'>
<div className='region-img'>

            <img src={regionUrls[regionName]} alt={regionName} />
</div>
        <p>{regionName}</p>
    </a>

    )
    
    }
</div>
</div>
)
}