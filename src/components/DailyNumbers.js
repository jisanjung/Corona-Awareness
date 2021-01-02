import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loading from "./Loading.js";
import moment from "moment";
import numeral from "numeral";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

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
    const [toggle1, setToggle1] = useState(true);
    const [toggle2, setToggle2] = useState(true);
    const [toggle3, setToggle3] = useState(true);
    const plus = <FontAwesomeIcon icon={faPlus}/>
    const minus = <FontAwesomeIcon icon={faMinus}/>

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
            <div className="cases daily-item flex flex-between">
                <div>
                    <span className="block">Global Cases </span>
                    <h2>
                        {cases ? numeral(cases).format("0,0") : <Loading/>}
                    </h2>
                    <ul className={`${toggle1 ? "none" : "block"} additional`}>
                        <li>Cases Today: {numeral(todayCases).format("0,0")}</li>
                        <li>Cases Per Million: {numeral(Math.ceil(casesPerMil)).format("0,0")}</li>
                    </ul>
                </div>
                <div>
                    <button onClick={() => setToggle1(!toggle1)}>{toggle1 ? plus : minus}</button>
                </div>
            </div>
            <div className="deaths daily-item flex flex-between">
                <div>
                    <span className="block">Deaths </span>
                    <h2>
                        {deaths ? numeral(deaths).format("0,0") : <Loading/>}
                    </h2>
                    <ul className={`${toggle2 ? "none" : "block"} additional`}>
                        <li>Deaths Today: {numeral(todayDeaths).format("0,0")}</li>
                        <li>Deaths Per Million: {numeral(Math.ceil(deathsPerMil)).format("0,0")}</li>
                    </ul>
                </div>
                <div>
                    <button onClick={() => setToggle2(!toggle2)}>{toggle2 ? plus : minus}</button>
                </div>
            </div>
            <div className="recovered daily-item flex flex-between">
                <div>
                    <span className="block">Recovered </span>
                    <h2>
                        {recovered ? numeral(recovered).format("0,0") : <Loading/>}
                    </h2>
                    <ul className={`${toggle3 ? "none" : "block"} additional`}>
                        <li>Recovered Today: {numeral(todayRecovered).format("0,0")}</li>
                        <li>Recovered Per Million: {numeral(Math.ceil(recoveredPerMil)).format("0,0")}</li>
                    </ul>
                </div>
                <div className="relative">
                    <button onClick={() => setToggle3(!toggle3)}>{toggle3 ? plus : minus}</button>
                </div>
            </div>
        </div>
    )
}

export default DailyNumbers
