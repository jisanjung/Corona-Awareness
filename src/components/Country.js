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
            <table className="country-list">
                <tbody>
                    <tr>
                        <th>Flag</th>
                        <th>Country</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                    {countries.filter(val => {
                        if (input === "") {
                            return countries
                        } else if (val.country.toLowerCase().includes(input.toLowerCase())) {
                            return val
                        }
                    }).map((val, i) => {
                        return (
                        <tr key={i} className="each-country">
                            <td><img src={val.countryInfo.flag}/></td>
                            <td>{val.country}</td>
                            <td>{val.cases}</td>
                            <td>{val.deaths}</td>
                            <td>{val.recovered}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Country
