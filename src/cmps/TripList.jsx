import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export function TripList() {
    const trips = useSelector(storeState => storeState.stayModule.stays)
    console.log('trips:', trips)
    

    useEffect(() => {
        // const trips = useSelector(storeState => storeState.stayModule.stays)

        console.log('trips:', trips)


    }, []);
    // const loggedInUser = useSelector(storeState => storeState.userModule.user);
    // const { _id, fullname } = loggedInUser;

    // const trips = stays.filter(stay => stay._id === loggedInUser._id)
    // const cancelledTrips = stays.filter(stay => stay._id === loggedInUser._id)

    return (
        <div className="trip-container">
            <h1>Trips</h1>

            {/* בדיקה אם יש טיולים - אם אין, מציג את החלק של "No trips booked" */}
            {trips.length === 0 ? (
                <div className="no-trips">
                    <div className="no-trips-content">
                        <span role="img" aria-label="wave" className="icon-hand-wave">👋</span>
                        <h2>No trips booked... yet!</h2>
                        <p>Time to dust off your bags and start planning your next adventure.</p>
                        <button className="start-searching-btn">Start searching</button>
                    </div>
                    <img
                        src="https://via.placeholder.com/400x200" // תמונה להמחשה בלבד, אפשר להחליף בקובץ האמיתי שלך
                        alt="Trip Planning"
                        className="trip-image"
                    />
                </div>
            ) : (
                <>
                    <div className="trips-section">
                        <h2>Where you've been</h2>
                        <div className="trip-list">
                            {Object.keys(trips).map((key, idx) => {
                                const trip = trips[key];
                                return (
                                    <div className="trip-item" key={idx}>
                                        <img src={trip.imgurls[0]} alt={trip.name} className="trip-image" />
                                        <div className="trip-info">
                                            <h3>{trip.name}</h3>
                                            <p>Hosted by {trip.host.fullname}</p> {/* הצגת המארח לפי ה-fullname */}
                                            <p>{trip.startDate} – {trip.endDate}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>


                    </div>

                    {/* {cancelledTrips.length > 0 && (
                        <div className="trips-section">
                            <h2>Cancelled trips</h2>
                            <div className="trip-list">
                                {cancelledTrips.map((trip, idx) => (
                                    <div className="trip-item" key={idx}>
                                        <img src={trip.image} alt={trip.name} className="trip-image" />
                                        <div className="trip-info">
                                            <h3>{trip.name}</h3>
                                            <p>Hosted by {trip.host}</p>
                                            <p>{trip.startDate} – {trip.endDate}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )} */}
                </>
            )}
        </div>
    );
}
