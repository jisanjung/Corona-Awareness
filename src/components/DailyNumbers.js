import React, { useEffect, useState } from 'react';
import axios from "axios";

const DailyNumbers = () => {

    const [updated, setUpdated] = useState("");

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v3/covid-19/all")
        .then(res => setUpdated(res.data.updated));
    }, []);

    return (
        <div>
            {updated ? updated : "Loading..."}
        </div>
    )
}

export default DailyNumbers
