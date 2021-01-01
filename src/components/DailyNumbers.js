import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loading from "./Loading.js";
import moment from "moment";

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
                <span>Global Cases: </span>
                {cases ? cases : <Loading/>}
            </div>
            <div className="deaths daily-item">
                <span>Deaths: </span>
                {deaths ? deaths : <Loading/>}
            </div>
            <div className="recovered daily-item">
                <span>Recovered: </span>
                {recovered ? recovered : <Loading/>}
            </div>
        </div>
    )
}

export default DailyNumbers
