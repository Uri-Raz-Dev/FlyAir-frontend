import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { CarouselImages } from '../CarouselImages'
import { useSelector } from 'react-redux'
import { getUserStays } from '../../store/actions/host.actions';
import { loadStays } from '../../store/actions/stay.actions';
import { SvgIcon } from '../Svgicon';

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
        <>
            <header className="listings-header">
                <h1>Your Listings</h1>
                {/* <Link to="/add-stay" className="add-stay-btn">+ Add Stay</Link> */}
                <Link
                    to="/add-stay"
                    className={`add-stay-btn`}
                >
                    <SvgIcon iconName={"addStay"} className="icon"></SvgIcon>
                </Link>
            </header>

            <div className="hosting-listing-grid">  {/* //main-grid */}

                <div className="main-grid"> {/* //hosting-listing-stays-grid */}
                    {userStays.map(stay => (
                        <div className="card" key={stay._id}> {/* //hosting-listing-stays-card */}
                            <>
                                <div className='card-carousel' onClick={() => onClickDetails(stay._id)}>
                                    {/* הצגת תמונות הנכס */}
                                    <CarouselImages imgs={stay.imgurls} />
                                </div>

                                <div className="card-content hosting-card-content">

                                    <div className='card-content-stay-name'>
                                        {/* <h2>{stay.location.city} . {stay.location.country}</h2> */}
                                        <h2>{stay.name}</h2>
                                    </div>
                                    <div className='hosting-card-location'>
                                        <h3>{stay.location.country}, {stay.location.city}</h3>
                                    </div>
                                    {/* <div className='card-content-data'>
                                            <p>{stay.description}</p>
                                        </div> */}
                                    {/* <div className='card-content-price'>
                                            <span className='num'>₪{stay.price} </span>
                                            <span> / night</span>
                                        </div> */}
                                    {/* <div className='card-content-score'>
                                            <span className='star-content'>
                                                ★
                                            </span>
                                            <span>
                                                {stay.reviews && stay.reviews.length > 0 ? stay.reviews[0].rate.cleanliness : 'No rating'}
                                            </span>
                                        </div> */}
                                </div>
                            </>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
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
