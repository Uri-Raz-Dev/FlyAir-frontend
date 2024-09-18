import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadOrders } from '../store/actions/order.actions'
import { socketService } from '../services/socket.service'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export function HostingReservations() {
    const [reservations, setReservations] = useState([])
    const [selectedTab, setSelectedTab] = useState('All')
    const orders = useSelector(storeState => storeState.orderModule.orders)
    const { stayId } = useParams()

    //    useEffect(() => {
    //     // const fetchedReservations = [
    //     //     {
    //     //         _id: '1',
    //     //         buyer: {
    //     //             fullname: 'James Thompson',
    //     //             imgURL: 'https://randomuser.me/api/portraits/men/8.jpg',
    //     //         },
    //     //         totalPrice: 600,
    //     //         startDate: '2024-09-10',
    //     //         endDate: '2024-09-15',
    //     //         guests: {
    //     //             adults: 4,
    //     //             kids: 0,
    //     //             infants: 0,
    //     //             pets: 1,
    //     //         },
    //     //         stay: {
    //     //             name: 'Scandinavian Cottage',
    //     //         },
    //     //         status: 'Upcoming',
    //     //     },
    //     //     {
    //     //         _id: '2',
    //     //         buyer: {
    //     //             fullname: 'Lorenzo Fagnano',
    //     //             imgURL: 'https://randomuser.me/api/portraits/men/9.jpg',
    //     //         },
    //     //         totalPrice: 700,
    //     //         startDate: '2023-10-22',
    //     //         endDate: '2023-11-22',
    //     //         guests: {
    //     //             adults: 1,
    //     //             kids: 0,
    //     //             infants: 0,
    //     //             pets: 0,
    //     //         },
    //     //         stay: {
    //     //             name: 'Teper Apartment',
    //     //         },
    //     //         status: 'Completed',
    //     //     },
    //     //     {
    //     //         _id: '3',
    //     //         buyer: {
    //     //             fullname: 'Elena Vitvitskiy',
    //     //             imgURL: 'https://randomuser.me/api/portraits/women/10.jpg',
    //     //         },
    //     //         totalPrice: 800,
    //     //         startDate: '2023-08-27',
    //     //         endDate: '2023-10-01',
    //     //         guests: {
    //     //             adults: 2,
    //     //             kids: 0,
    //     //             infants: 1,
    //     //             pets: 0,
    //     //         },
    //     //         stay: {
    //     //             name: 'Teper Apartment',
    //     //         },
    //     //         status: 'Completed',
    //     //     },
    //     //     {
    //     //         _id: '4',
    //     //         buyer: {
    //     //             fullname: 'Nik Kiy',
    //     //             imgURL: 'https://randomuser.me/api/portraits/men/11.jpg',
    //     //         },
    //     //         totalPrice: 900,
    //     //         startDate: '2023-07-26',
    //     //         endDate: '2023-08-24',
    //     //         guests: {
    //     //             adults: 2,
    //     //             kids: 0,
    //     //             infants: 0,
    //     //             pets: 0,
    //     //         },
    //     //         stay: {
    //     //             name: 'Teper Apartment',
    //     //         },
    //     //         status: 'Completed',
    //     //     },
    //     // ]


    //     setReservations(orders)
    //     console.log('fetchedReservations:', orders)
    //     console.log('reservations:', reservations)
    // }, [])
    useEffect(() => {
        loadOrders()
        socketService.on('reservation-status-changed', onReservationStatusChanged) // Listen for socket events

        return () => {
            socketService.off('reservation-status-changed', onReservationStatusChanged) // Clean up
        }
    }, [])


    useEffect(() => {
        setReservations(orders)
    }, [orders])

    const onReservationStatusChanged = (updatedReservation) => {
        setReservations(prevReservations => {
            return prevReservations.map(reservation =>
                reservation._id === updatedReservation._id ? updatedReservation : reservation
            );
        });
    };

    const changeStatus = (reservationId, newStatus) => {
        const updatedReservations = reservations.map(reservation =>
            reservation._id === reservationId ? { ...reservation, status: newStatus } : reservation
        );
        setReservations(updatedReservations);
        socketService.emit('change-reservation-status', { reservationId, newStatus });
    }

    const filteredReservations = reservations.filter(reservation => {
        console.log('reservation:', reservation.stay);

        if (selectedTab === 'All') return true
        return reservation.status === selectedTab
    })

    return (
        <div className="reservations-container">
            <h2>Reservations</h2>
            <div className="tabs">
                <button
                    className={selectedTab === 'Upcoming' ? 'active' : ''}
                    onClick={() => setSelectedTab('Upcoming')}
                >
                    Upcoming
                </button>
                <button
                    className={selectedTab === 'Completed' ? 'active' : ''}
                    onClick={() => setSelectedTab('Completed')}
                >
                    Completed
                </button>
                <button
                    className={selectedTab === 'Cancelled' ? 'active' : ''}
                    onClick={() => setSelectedTab('Cancelled')}
                >
                    Cancelled
                </button>
                <button
                    className={selectedTab === 'All' ? 'active' : ''}
                    onClick={() => setSelectedTab('All')}
                >
                    All
                </button>
            </div>

            <table className="reservations-table">
                <thead>
                    <tr>
                        <th>Stay</th>
                        <th>Status</th>
                        <th>Guests</th>
                        <th>Check-in</th>
                        <th>Checkout</th>
                        <th>Listing</th>
                        <th>Confirmation Code</th>
                        <th>Total Payout</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredReservations.length > 0 ? (
                        filteredReservations.map(reservation => (
                            <tr key={reservation._id}>
                                <td><Link to={`/stay/${reservation.stay._id}`}><img src={reservation.stay.imgurls[0]} alt="stay-img" /></Link></td>
                                <td>
                                    <button
                                        className={`status-button ${reservation.status.toLowerCase()}`}
                                        onClick={() => changeStatus(reservation._id, getNextStatus(reservation.status))}
                                    >
                                        {reservation.status}
                                    </button>
                                </td>
                                <td>
                                    <img src={reservation.buyer.imgUrl} alt="Guest" className="guest-img" />
                                    {reservation.buyer.fullname}
                                </td>
                                <td>{reservation.startDate}</td>
                                <td>{reservation.endDate}</td>
                                <td>{reservation.stay.name}</td>
                                <td>{reservation._id}</td>
                                <td>₪{reservation.totalPrice}</td>
                                <td>
                                    <button className="details-button">Details</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">No reservations available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

const getNextStatus = (currentStatus) => {
    if (currentStatus === 'Upcoming') return 'Approved';
    if (currentStatus === 'Approved') return 'Cancelled';
    return 'Upcoming';
};

