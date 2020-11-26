import React from 'react'
import './City.css'

class City extends React.Component {
    state = {  }
    render() { 

        console.log(this.props.city);

        const {cityName, image, price} = this.props.city;

        return (
            <div className="city col s12">
                <div className="image">
                    <img src={image} alt=""/>
                </div>
                <div className="city-name">
                    {cityName}
                </div>
                <div className="price">
                    ${price}/night average
                </div>
            </div>
          );
    }
}
 
export default City;