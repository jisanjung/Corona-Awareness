import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loading from "./Loading.js";

const DailyNumbers = () => {

    const [updated, setUpdated] = useState("");
    const [cases, setCases] = useState("");
    const [deaths, setDeaths] = useState("");
    const [recovered, setRecovered] = useState("");

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v3/covid-19/all")
        .then(res => {
            setUpdated(res.data.updated);
            setCases(res.data.cases);
            setDeaths(res.data.deaths);
            setRecovered(res.data.recovered);
        });
    }, []);

    return (
        <div>
            <span className="updated">{updated ? `last updated: ${updated}` : <Loading/>}</span>
            <div className="cases">
                {cases ? `Cases: ${cases}` : <Loading/>}
            </div>
            <div className="deaths">
                {deaths ? `Deaths: ${deaths}` : <Loading/>}
            </div>
            <div className="recovered">
                {recovered ? `Recovered: ${recovered}` : <Loading/>}
            </div>
        </div>
    )
}

export default DailyNumbers
