import React, { Component } from 'react';
import Footer from './Footer.js';
import Header from "./Header.js";
import Title from './Title.js';
import axios from "axios";
import DailyNumbers from './DailyNumbers.js';

export class Tracker extends Component {
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
                    <DailyNumbers/>
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
