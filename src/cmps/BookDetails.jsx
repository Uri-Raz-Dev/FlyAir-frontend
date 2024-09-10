import { useParams } from "react-router";
import { SvgIcon } from "./Svgicon";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function BookDetails({ imgurls, name, summary, reviews, calculateReviewScore, price }) {
    const { stayId } = useParams()
    const nights = 5
    const fee = (price * nights) * 0.15
    const total = (price * nights) + fee
    const showPrice = price.toFixed(0).toLocaleString()
    const showFee = fee.toFixed(0).toLocaleString()
    const showTotal = total.toFixed(0).toLocaleString()

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

                <div className="price-header">Price details</div>

                <div className="price-details">
                    <div className="price">
                        <div>₪{showPrice} x {nights} nights</div>
                        <div>₪{(showPrice * nights).toFixed(0).toLocaleString()}</div>
                    </div>
                    <div className="fee">
                        <div>Airbnb service fee</div>
                        <div>₪{showFee}</div>
                    </div>
                    <div className="total">
                        <div>Total <span>(ILS)</span> </div>
                        <div>₪{showTotal}</div>
                    </div>
                </div>
            </div>

        </aside>
    )
}