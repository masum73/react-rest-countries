import React from 'react';
import './Country.css'
const Country = (props) => {
    const {area, region, population, name,flags} = props.country;
    return (
        <div className='country bg-warning'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Country Population: {population}</p>
            <p>Region: {region}</p>
            <p>Country Area: {area}</p>
        </div>
    );
};

export default Country;