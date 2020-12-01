import React from 'react';
import './SingleFullVenue.css'
import axios from 'axios'
import Point from './Point';

class SingleFullVenue extends React.Component {

    state = {
        singleVenue: {},
        points: [],
        checkIn: {},
        checkOut: {}
    }
    
    async componentDidMount() {
        const vId = this.props.match.params.vid;
        const url = `${window.apiHost}/venue/${vId}`;
        const axiosResponse = await axios.get(url);
        const singleVenue = axiosResponse.data;

        const pointsUrl = `${window.apiHost}/points/get`;
        const pointsAxiosResponse = await axios.get(pointsUrl);
        

        const points = singleVenue.points.split(',').map((point,i) => {
        return ( <Point key={i} pointDesc={pointsAxiosResponse.data} point={point} />
            )
        })
        this.setState({singleVenue,points});
    }

    changeNumberOfGuests = (e) => {this.setState({numberOfGuests: e.target.value})};
    changeCheckIn = (e) => {this.setState({checkIn: e.target.value})};
    changeCheckOut = (e) => {this.setState({checkOut: e.target.value})}
    reserveNow = (e) => {
        console.log('Reserved');
    }
    
    render() { 
        const sv = this.state.singleVenue;
        return ( 
            <div className="row single-venue">
                <div className="col s12 center">
                    <img src={sv.imageUrl} alt=""/>
                </div>
                <div className="col s8 location-details offset-s2">
                    <div className="col s8 left-details">
                        <div className="location"> {sv.location} </div>
                        <div className="title"> {sv.title} </div>
                        <div className="guests"> {sv.guests} </div>
                        <div className="divider"></div>
                        {this.state.points}
                        <div className="details">{sv.details}</div>
                        <div className="details">{sv.amenities}</div>
                    </div>

                    <div className="col s4 right-details">
                        <div className="price-per-day"> ${sv.pricePerNight} <span>per day</span> </div>
                        <div className="rating"> {sv.rating} </div>
                        <div className="col s6">
                            Check-In 
                            <input type="date"/>
                        </div>
                        <div className="col s6">
                            Check-Out
                            <input type="date"/>
                        </div>
                        <div className="col s12">
                            <select className="browser-default">
                                <option value="1">1 Guest</option>
                                <option value="1">2 Guests</option>
                                <option value="1">3 Guests</option>
                                <option value="1">4 Guests</option>
                                <option value="1">5 Guests</option>
                                <option value="1">6 Guests</option>
                                <option value="1">7 Guests</option>
                                <option value="1">8 Guests</option>
                            </select>
                        </div>
                        <div className="col s12 center">
                            <button onClick={this.reserveNow} className="btn red accent-2">Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SingleFullVenue;