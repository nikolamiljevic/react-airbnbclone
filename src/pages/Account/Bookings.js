import React from 'react'
import moment from 'moment';
import swal from 'sweetalert';
import axios from 'axios';

const Bookings = (props) => {
    
    const bookings = props.bookings.map((booking,i) => {
        const dates = `${moment(booking.checkIn).format('MMM Do')} - ${moment(booking.checkOut).format('MMM Do YYYY')}`;
        return (
        <tr key={i} className="booking-row">
            <td>{booking.status === 'cofirmed' && props.type == 'past'
                ? "complete" 
                : booking.status
                }
            </td>
            <td>
                <div className="booking-detail">{dates}</div>
                <div className="booking-detail">{booking.venueData.title}</div>
                <div className="booking-detail">{booking.venueData.location}</div>
            </td>
            <td>
                <div className="booking-detail">Confirmation #: {booking.conf}</div>
                <div className="booking-detail">{booking.numberOfGuests} Guests, {booking.totalNights} Nights</div>
                <div className="booking-detail">${booking.pricePerNight} per night</div>
                <div className="booking-detail">${booking.totalPrice} Total</div>
            </td>
            <td>
                <div className="booking-detail pointer">
                    Print Reservation
                </div>
                {
                    props.type === 'upcoming'
                    ?   <div className="booking-detail pointer">Cancel Confirmation</div>
                    :   <></>
                }
            </td>
        </tr>
        )
    })
    return (
        <table className="booking">
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Dates and location</th>
                    <th>Details</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {bookings}
            </tbody>
        </table>
    )
}

export default Bookings
