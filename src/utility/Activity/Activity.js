import React from 'react'
import {Link} from 'react-router-dom'

class Activity extends React.Component {
   
    render() { 
        const { activityType, cost, id , image, rating, title, totalRatings} = this.props.activity;
        return ( 
            <div className="activity">
                <Link to={`/activity/${id}`}>
                    <img src={image}/>
                    <div className="activity-type">{activityType}</div>
                    <div className="title">{title}</div>
                    <div className="cost">From ${cost}/person</div>
                    <div className="rating">
                        <i className="material-icons">star</i>{rating} ({totalRatings})
                    </div>
                </Link>
            </div>
         );
    }
}
 
export default Activity;