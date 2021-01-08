import React, { useState, useEffect } from 'react';
import axios from "axios";

const Country = () => {

    const [countries, setCountries] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
        .then(res => {
            const sortedCountries = res.data.sort((country, nextCountry) => nextCountry.cases - country.cases);
            setCountries([...sortedCountries])
        })
    }, []);

    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Search Country..." onChange={e => setInput(e.target.value)}/>
            </form>
            <div className="country-list">
                {countries.filter(val => {
                    if (input === "") {
                        return countries
                    } else if (val.country.toLowerCase().includes(input.toLowerCase())) {
                        return val
                    }
                }).map((val, i) => <li key={i}>{val.country}</li>)}
            </div>
        </div>
    )
}

export default Country
