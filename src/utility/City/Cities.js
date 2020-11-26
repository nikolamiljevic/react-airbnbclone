import React from 'react'
import City from './City'

const Cities = ({cities}) => {

   return cities.map((city,i) =>  {
        return (
            <div className="col s3">
                <City city={city} key={i} /> 
            </div>
        )
    })
}

export default Cities
