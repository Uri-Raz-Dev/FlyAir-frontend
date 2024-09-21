import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadOrders, updateOrder } from '../store/actions/order.actions'
import { ORDER_STATUS_UPDATE, SOCKET_NEW_BOOKING, socketService } from '../services/socket.service'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { eventBus, showSuccessMsg } from '../services/event-bus.service' // Import eventBus

export function HostingReservations() {
    const [selectedTab, setSelectedTab] = useState('All')
    const orders = useSelector(storeState => storeState.orderModule.orders)
    const { stayId } = useParams()
    useEffect(() => {
        loadOrders()
        socketService.on(ORDER_STATUS_UPDATE, test)
        socketService.on('reservation-approved', (data) => {
            console.log(data)

            showSuccessMsg(`Your reservation  has been approved!`);
        });

        return () => {
            socketService.off(ORDER_STATUS_UPDATE, test)
            socketService.off('reservation-approved');
        }
    }, [])

    const changeStatus = async (reservationId, newStatus) => {
        const updatedReservation = orders.find(res => res._id === reservationId);
        if (!updatedReservation) return

        try {

            await updateOrder({ ...updatedReservation, status: newStatus })

            loadOrders()

            socketService.emit(ORDER_STATUS_UPDATE, { reservationId, newStatus })
            if (newStatus === 'Approved') {

                socketService.emit('reservation-approved', {
                    reservationId: updatedReservation._id,
                    stay: updatedReservation.stay // Emit the full stay object
                });
                showSuccessMsg(`Reservation ${updatedReservation.stay.name} has been approved!`)
            }
            console.log('Reservation status updated:', updatedReservation.stay.name);
            console.log({
                buyerId: updatedReservation.buyer._id,
                reservationId: updatedReservation._id,
                stayName: updatedReservation.stay.name
            });
        } catch (err) {
            console.error('Failed to update reservation status:', err)
        }
    }

    const filteredReservations = orders.filter(reservation => {

        if (selectedTab === 'All') return true
        return reservation.status === selectedTab
    })
    console.log(filteredReservations);

    console.log(orders)
    function test() {
        toast.success('yay', { position: "bottom-center" })
    }
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
                                <td><Link to={`/stay/${reservation.buyerId}`}><img src={reservation.stay.imgurls[0]} alt="stay-img" /></Link></td>
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

