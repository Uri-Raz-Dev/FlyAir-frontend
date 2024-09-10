import { useEffect, useRef, useState } from "react";
import { labels } from "../services/labels.service.js";
import { SvgIcon } from "./Svgicon.jsx";

export function TypeLabels({ filterBy, onSetFilter }) {
    const listRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [selectedLabel, setSelectedLabel] = useState(filterBy.labels?.[0] || null);
    const [filterToEdit, setFilterToEdit] = useState({ ...filterBy })
    console.log(filterToEdit);

    useEffect(() => {
        onSetFilter(filterToEdit)
    }, [filterToEdit])

    const handleScroll = (direction) => {
        const scrollAmount = listRef.current.clientWidth;
        if (direction === "left") {
            listRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            listRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
        checkScrollPosition();
    };

    const checkScrollPosition = () => {
        const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };

    const handleLabelChange = (label) => {
        setSelectedLabel(label);
        setFilterToEdit({ ...filterToEdit, labels: [label] });
    };
    return (
        <div className="labels-container">
            <div className="scroll-button left-button" style={{ display: canScrollLeft ? "flex" : "none" }} onClick={() => handleScroll("left")} disabled={!canScrollLeft}>
                <SvgIcon iconName={"leftlabelarrow"} />
            </div>

            <ul ref={listRef} className="labels-list" onScroll={checkScrollPosition}>
                {Object.keys(labels).map((label, index) => (
                    <li className={`filter-item ${selectedLabel === label ? 'active' : ''}`} onClick={() => handleLabelChange(label)} key={index}>
                        <label className="filter-label">
                            <input
                                type="radio"
                                name="type-filter"
                                value={label}
                                checked={selectedLabel === label}
                                onChange={() => handleLabelChange(label)}
                            />
                            <div className="stay-labal-item">
                                <img width={24} height={24} src={labels[label]} alt={label} />
                                <span className="label-name">{label}</span>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>

            <div className="scroll-button right-button" style={{ display: canScrollRight ? "flex" : "none" }} onClick={() => handleScroll("right")} disabled={!canScrollRight}>
                <SvgIcon iconName={"rightlabelarrow"} />
            </div>

            <div className="filters">
                <SvgIcon iconName={"filters"} />
                <div>Filters</div>
            </div>
        </div>
    );
}
