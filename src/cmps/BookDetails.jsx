import { SvgIcon } from "./Svgicon";

export function BookDetails({ imgurls, name, summary, reviews, calculateReviewScore }) {
    return (
        <aside className="book-details-container">
            <div className="book-details">
                <div className="book-preview">
                    <div className="preview-img">
                        <img src={imgurls[0]} alt="book-preview-image" />
                    </div>

                    <div className="book-info">
                        <div>{name}</div>
                        <div>{summary}</div>
                        <div className="book-rating">
                            <span> <SvgIcon iconName={"reviewstar"}></SvgIcon></span>
                            <span>{calculateReviewScore()}</span>
                            <span>({reviews.length} reviews)</span>
                        </div>
                    </div>
                </div>
                <div className="price-header"></div>
                <div className="price-details"></div>
            </div>
        </aside>
    )
}