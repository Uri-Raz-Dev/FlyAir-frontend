import { SvgIcon } from "./Svgicon"
import { labels } from "../services/labels.service.js"
export function TypeLabels() {
    console.log(Object.keys(labels));
    console.log(labels['beach']);

    return (
        <div className="labels-container">

            <ul className="labels-list">
                {
                    Object.keys(labels).map((label, index) => (

                        <li className="filter-item" key={index} >
                            <label className="filter-label">

                                <input type="radio" name="type-filter" value={label} />

                                <div className="stay-labal-item">
                                    <img width={24} height={24} src={labels[label]} alt={label} />
                                    <span className="label-name">{label}</span>
                                </div>
                            </label>

                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}