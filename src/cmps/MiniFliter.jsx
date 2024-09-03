import { SvgIcon } from "./Svgicon";

export function MiniFilter({
    openFilter }) {
    return (
        <div onClick={() => openFilter()} className="mini-filter">

            <a href='#' className={`mini-filter-item `}>

                <div>Anywhere</div>

            </a>

            <a href='#' className="mini-filter-item">


                <div>Any week</div>


            </a>

            <a href='#' className="mini-filter-item">


                <div>Add guests</div>


            </a>


            <div className='mini-search-container'>
                <button className="mini-search-button">
                    <span><SvgIcon iconName="minisearch" /></span>
                </button>

            </div>
        </div>
    )
}