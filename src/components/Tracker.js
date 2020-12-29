import React, { Component } from 'react';
import Footer from './Footer.js';
import Header from "./Header.js";
import Title from './Title.js';
import axios from "axios";

export class Tracker extends Component {

    constructor() {
        super();
        this.state = {
            url: {
                daily: "https://corona.lmao.ninja/v3/covid-19/all",
                chart: "https://corona.lmao.ninja/v3/covid-19/historical/all",
                country: "https://corona.lmao.ninja/v3/covid-19/countries"
            },
            updated: "",
            cases: "",
            deaths: "",
            recovered: "",
            todayCases: "",
            pastCases: [],
            pastRecovered: [],
            country: []
        }
    }

    componentDidMount() {

        const { url } = this.state;

        // daily numbers
        axios.get(url.daily)
        .then(res => {
            this.setState({
                updated: res.data.updated,
                cases: res.data.cases,
                deaths: res.data.deaths,
                recovered: res.data.recovered,
                todayCases: res.data.todayCases
            });
        })
    }

    render() {

        const dark = "#35404e";
        const orange = "#fea71a";

        return (
            <div className="tracker">
                <Header/>
                <div className="showcase">
                    <div className="container">
                        <span className="text-center">
                            <Title color={dark} size="1.5rem" content="Tracker Tool"/>
                        </span>
                        <p className="text-center">See daily <a href="/" style={{color: orange}}>numbers</a>, data <a href="/" style={{color: orange}}>visualized</a> and country <a href="/" style={{color: orange}}>specifics</a></p>
                    </div>
                </div>
                <div className="daily">

                </div>
                <div className="chart">

                </div>
                <div className="country">

                </div>
                <Footer/>
            </div>
        )
    }
}

export default Tracker
