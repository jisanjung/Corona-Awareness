import React, { useState, useEffect } from 'react';
import axios from "axios";

const Country = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
        .then(res => setCountries([...res.data]))
    }, []);

    return (
        <div>
            {countries.map((item, i) => {
                return <li key={i}>{item.country}</li>
            })}
        </div>
    )
}

export default Country
