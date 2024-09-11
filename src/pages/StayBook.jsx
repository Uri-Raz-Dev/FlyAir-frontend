import { Link, useParams } from "react-router-dom";
import { SvgIcon } from "../cmps/Svgicon";
import { useSelector } from "react-redux";
import { BookDetails } from "../cmps/BookDetails";

export function StayBook() {
    const { stayId } = useParams()
    const stay = useSelector(storeState => storeState.stayModule.stay)

    const { imgurls, reviews, name, summary } = stay
    console.log(stay);


    function calculateReviewScore() {
        const ratingKeys = ["value", "cleanliness", "communication", "check-in", "accuracy", "location"]

        const totalScores = ratingKeys.reduce((acc, key) => {
            const total = reviews.reduce((sum, review) => sum + review.rate[key], 0) / reviews.length
            return acc + total
        }, 0)

        const totalReviewAvg = totalScores / ratingKeys.length;

        return totalReviewAvg.toFixed(2)
    }
    calculateReviewScore()
    return (
        <main className="staybook-container">
            <header className="header-container">
                <div>Confirm and pay </div>
                <Link className="book-back" to={`/stay/${stayId}`}><SvgIcon iconName="leftlabelarrow" /></Link>
            </header>

            <main className="book-pay-container">
                test
            </main>

            <BookDetails imgurls={imgurls} name={name} summary={summary} reviews={reviews} calculateReviewScore={calculateReviewScore} />
        </main>
    )
}