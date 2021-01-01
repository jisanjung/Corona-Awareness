import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loading from "./Loading.js";
import moment from "moment";
import numeral from "numeral";

const DailyNumbers = () => {

    const [updated, setUpdated] = useState("");
    const [cases, setCases] = useState("");
    const [deaths, setDeaths] = useState("");
    const [recovered, setRecovered] = useState("");
    const [todayCases, setTodayCases] = useState("");
    const [casesPerMil, setCasesPerMil] = useState("");
    const [todayDeaths, setTodayDeaths] = useState("");
    const [deathsPerMil, setDeathsPerMil] = useState("");
    const [todayRecovered, setTodayRecovered] = useState("");
    const [recoveredPerMil, setRecoveredPerMil] = useState("");

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v3/covid-19/all")
        .then(res => {
            setUpdated(res.data.updated);
            setCases(res.data.cases);
            setDeaths(res.data.deaths);
            setRecovered(res.data.recovered);
            setTodayCases(res.data.todayCases);
            setCasesPerMil(res.data.casesPerOneMillion);
            setTodayDeaths(res.data.todayDeaths);
            setDeathsPerMil(res.data.deathsPerOneMillion);
            setTodayRecovered(res.data.todayRecovered);
            setRecoveredPerMil(res.data.recoveredPerOneMillion);
        });
    }, []);

    // converts unix time stamp to YYYYMMDD h:mm:ss a
    const unixToDate = unix => {
        let formatted = moment(unix).format("YYYYMMDD, h:mm:ss a");
        return formatted; // ex: 20200824 11:59:00 pm
    }

    let date = unixToDate(updated);
    let timeUpdated = moment(date, "YYYYMMDD, h:mm:ss a").fromNow(); // ex: 10 minutes ago

    return (
        
        <div>
            <span className="updated text-right block">{updated ? `last updated: ${timeUpdated}` : <Loading/>}</span>
            <div className="cases daily-item">
                <span className="block">Global Cases </span>
                <h2>
                    {cases ? numeral(cases).format("0,0") : <Loading/>}
                </h2>
                <ul className="additional">
                    <li>Cases Today: {todayCases}</li>
                    <li>Cases Per 1 Million: {casesPerMil}</li>
                </ul>
            </div>
            <div className="deaths daily-item">
                <span className="block">Deaths </span>
                <h2>
                    {deaths ? numeral(deaths).format("0,0") : <Loading/>}
                </h2>
                <ul className="additional">
                    <li>Deaths Today: {todayDeaths}</li>
                    <li>Deaths Per 1 Million: {deathsPerMil}</li>
                </ul>
            </div>
            <div className="recovered daily-item">
                <span className="block">Recovered </span>
                <h2>
                    {recovered ? numeral(recovered).format("0,0") : <Loading/>}
                </h2>
                <ul className="additional">
                    <li>Recovered Today: {todayRecovered}</li>
                    <li>Recovered Per 1 Million: {recoveredPerMil}</li>
                </ul>
            </div>
        </div>
    )
}

export default DailyNumbers
