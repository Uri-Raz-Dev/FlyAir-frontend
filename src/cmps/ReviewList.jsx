import { Link } from 'react-router-dom'
import { userService } from '../services/user'

import { ReviewPreview } from './ReviewPreview.jsx'
import { SvgIcon } from './Svgicon.jsx'

export function ReviewList({ stay }) {

    const { reviews, host } = stay



    function shouldShowActionBtns(review) {
        const user = userService.getLoggedinUser()

        if (!user) return false
        if (user.isAdmin) return true
        return review.byUser?._id === user._id
    }

    return (
        <div className='reviews-wrapper full'>
            <div className="review-info">
                <div className="review-rating">
                    <span><SvgIcon iconName={"reviewstar"}></SvgIcon>4.78</span>
                </div>
                <span> · </span>
                <Link to="review">1,025 reviews</Link>
            </div>

            <div className="reviews-ratings">
                <ul className="reviews-ratings-list">

                    <li>
                        <div>Overall rating</div>
                        <div>
                            <ul>
                                <li>
                                    <span>5</span>
                                    <div>
                                        <div className='fill-bar'></div>
                                    </div>
                                </li>
                                <li>
                                    <span>4</span>
                                    <div>
                                        <div className='fill-bar'></div>
                                    </div>
                                </li>
                                <li>
                                    <span>3</span>
                                    <div>
                                        <div className='fill-bar'></div>
                                    </div>
                                </li>
                                <li>
                                    <span>2</span>
                                    <div>

                                        <div className='fill-bar'></div>
                                    </div>
                                </li>
                                <li>
                                    <span>1</span>
                                    <div>
                                        <div className='fill-bar'></div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </li>

                    <li>
                        <div>Cleanliness</div>
                        <div>5.0</div>
                        <div><SvgIcon iconName={"cleanliness"}></SvgIcon></div>
                    </li>

                    <li>
                        <div>Accuracy</div>
                        <div>4.9</div>
                        <div><SvgIcon iconName={"accuracy"}></SvgIcon></div>
                    </li>

                    <li>
                        <div>Check-in</div>
                        <div>5.0</div>
                        <div><SvgIcon iconName={"checkin"}></SvgIcon></div>
                    </li>

                    <li>
                        <div>Communication</div>
                        <div>4.9</div>
                        <div><SvgIcon iconName={"communication"}></SvgIcon></div>
                    </li>

                    <li>
                        <div>Location</div>
                        <div>5.0</div>
                        <div><SvgIcon iconName={"location"}></SvgIcon></div>
                    </li>

                    <li>
                        <div>Value</div>
                        <div>4.8</div>
                        <div><SvgIcon iconName={"value"}></SvgIcon></div>
                    </li>
                </ul>
            </div>
            <div className="review-list-wrapper">
                <ul className='review-list'>
                    {reviews && reviews.map((review, idx) => {
                        return (
                            <li key={idx}>
                                <div className='review-preview'>

                                    <div className='review-header'>
                                        <img src={host.imgUrl} alt="" />
                                        <div className='by-review'>
                                            <div>{review.by}</div>
                                            <span>Tel Aviv-Yafo, Israel</span>
                                        </div>
                                    </div >
                                    <div className="star-rating">
                                        <SvgIcon iconName={"reviewstar"}></SvgIcon>
                                        <SvgIcon iconName={"reviewstar"}></SvgIcon>
                                        <SvgIcon iconName={"reviewstar"}></SvgIcon>
                                        <SvgIcon iconName={"reviewstar"}></SvgIcon>
                                        <SvgIcon iconName={"reviewstar"}></SvgIcon>

                                        <span> · </span>

                                        <span>August 2023</span>

                                        <span> · </span>

                                        <span>Tel Aviv-Yafo, Israel</span>
                                    </div>


                                </div>
                                <div>{review.txt}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}