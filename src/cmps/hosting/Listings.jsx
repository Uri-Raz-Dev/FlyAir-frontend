import React, { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { CarouselImages } from '../CarouselImages'
import { useSelector } from 'react-redux'
import { getUserStays } from '../../store/actions/host.actions';

export function Listings() {
    const navigate = useNavigate()
    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    const userStays = useSelector(storeState => storeState.hostModule.userStays)
    console.log('userStays:', userStays)
    useEffect(() => {
        getUserStays()
    }, [loggedInUser])
    function onClickDetails(id) {
        console.log('onClickDetails:', id)
        navigate(`/stay/${id}`)
    }

    return (
        <div className="main-grid">
            <header className="listings-header">
                <h1>Your Listings</h1>
                <Link to="/add-stay" className="add-stay-btn">+ Add Stay</Link>
            </header>

            <div className="stays-grid">
                {userStays.map(stay => (
                    <div className="card" key={stay._id}>
                        <>
                            <div className='card-carousel' onClick={() => onClickDetails(stay._id)}>
                                {/* הצגת תמונות הנכס */}
                                <CarouselImages imgs={stay.imgurls} />
                            </div>

                            <div className="card-content">
                                <div className='card-content-location'>
                                    <p>{stay.location.country}, {stay.location.city}</p>
                                </div>
                                <div className='card-content-data'>
                                    <p>{stay.description}</p>
                                </div>
                                <div className='card-content-price'>
                                    <span className='num'>₪{stay.price} </span>
                                    <span> / night</span>
                                </div>
                                <div className='card-content-score'>
                                    <span className='star-content'>
                                        ★
                                    </span>
                                    <span>
                                        {stay.reviews && stay.reviews.length > 0 ? stay.reviews[0].rate.cleanliness : 'No rating'}
                                    </span>
                                </div>
                            </div>
                        </>
                    </div>
                ))}
            </div>
        </div>
    );
}

// // רכיב להצגת קרוסלה של תמונות
// function CarouselImages({ imgs }) {
//     return (
//         <div className="carousel">
//             {imgs.map((imgUrl, idx) => (
//                 <img key={idx} src={imgUrl} alt={`Stay image ${idx}`} className="stay-image" />
//             ))}
//         </div>
//     );
// }
