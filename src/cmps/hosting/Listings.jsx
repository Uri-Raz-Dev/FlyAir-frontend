import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { CarouselImages } from '../CarouselImages'
import { useSelector } from 'react-redux'
import { loadStays } from '../../store/actions/stay.actions';

export function Listings() {
    const navigate = useNavigate()
    const loggedInUser = useSelector(storeState => storeState.userModule.user);

    const stays = useSelector(storeState => storeState.stayModule.stays);
    const userStays = stays.filter(stay => stay.host._id === loggedInUser._id);

    useEffect(() => {
        const staysss = loadStays()
        console.log('stays:', staysss)
    }, [])

    // async function loadStays() {
    //     // const users = await userService.getUsers()
    //     userStays = stays.filter(stay => stay.host._id === loggedInUser._id)
    //     // setUsers(users)
    // }

    function onClickDetails(id) {
        console.log('onClickDetails:', id)
        navigate(`/stay/${id}`)
    }


    return (
        <>
            <header className="listings-header">
                <h1>Your Listings</h1>
                <Link to="/add-stay" className="add-stay-btn">+ Add Stay</Link>
            </header>
           
            <div className="hosting-listing-grid">  {/* //main-grid */}

                <div className="hosting-listing-stays-grid"> {/* //stays-grid */}
                    {stays
                        .filter(stay => stay.host._id === loggedInUser._id) // תחילה מבצעים את הסינון
                        .map(stay => (
                            <div className="hosting-listing-stays-card" key={stay._id}>
                                <>
                                    <div className='card-carousel' onClick={() => onClickDetails(stay._id)}>
                                        {/* הצגת תמונות הנכס */}
                                        <CarouselImages imgs={stay.imgurls} />
                                    </div>

                                    <div className="card-content">
                                        <div className='card-content-location'>
                                            <h2>{stay.location.name}</h2>
                                        </div>
                                        <div className='card-content-location'>
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
