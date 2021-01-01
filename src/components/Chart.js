import React, { Component } from 'react';
import axios from "axios";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

export class Chart extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                labels: [],
                datasets: [],
            }
        }
    }

    componentDidMount() {
        axios.get("https://corona.lmao.ninja/v3/covid-19/historical/all")
        .then(res => {
            const keys = Object.keys(res.data.cases);
            const cases = Object.values(res.data.cases);
            const recovered = Object.values(res.data.recovered);
            this.setState({
                // must be structured like this for chart.js
                data: {
                    labels: [...keys],
                    datasets: [{
                        label: "Cases",
                        data: [...cases],
                        backgroundColor: "transparent",
                        borderColor: "rgb(130, 122, 243)"
                    },
                    {
                        label: "Recovered",
                        data: [...recovered],
                        backgroundColor: "transparent",
                        borderColor: "rgb(108, 230, 244)"
                    }]
                }
            });
        });
    }

    render() {
        return (
            <div className="chart">
                <Line 
                    data={this.state.data}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    callback: function(value) {
                                        return numeral(value).format("0a").toUpperCase();
                                    }
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart

