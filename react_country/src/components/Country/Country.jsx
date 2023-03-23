import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flags,population} = props.country
    return (
       
            <div className='style bg-success-subtle'>
                <img src={flags.png} alt="" />
                <h3>Country Name: {name.common}</h3>
                <h3>Population: {population}</h3>



            {/* <img src={props.flags} alt="" />
            <h3>Country Name: {props.name}</h3>
            <h3>Population: {props.population}</h3> */}
            </div>
    
    );
};

export default Country;