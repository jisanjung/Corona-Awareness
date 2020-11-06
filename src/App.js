import React, { Component } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Text from "./components/Text";
import "./sass/main.scss";
import Button from './components/Button';
import about from "./images/about.png";
import Tag from './components/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import mask from "./images/mask.png";
import wash from "./images/wash.png";
import cough from "./images/cough.png";
import clean from "./images/clean.png";
import Footer from './components/Footer';

export class App extends Component {
  render() {

    const dark = "#35404e";
    const gray = "#8a8eaa";
    const darkBlue = "#294e7d";
    const purple = "#706ad4";

    return (
      <div className="App">
        <Header/>
        <div className="home section">
          <div className="container"> 
            <Title color={darkBlue} size="1.125rem" content="Stay Home, Stay Safe"/>
            <Title color={purple} size="2.25rem" content="Protect Yourself From Coronavirus (COVID-19)"/>
            <Text color={gray} content="Learn how to help flatten the curve of a deadly virus."/>
            <Button type="primary" dest="#Prevention" content="Prevention"/>
            <Button type="light" dest="/" content="Tracker"/>
          </div>
        </div>
        <div className="about section" id="About">
          <div className="container flex">
            <div className="img-wrap">
              <img src={about} alt="About"/>
            </div>
            <div className="info">
              <Tag content="About COVID-19"/>
              <Title color={dark} size="2rem" content="What is novel coronavirus?"/>
              <Text color={gray} content="More than 78,191 people have contracted the virus in China. Health authorities have identified many other people with COVID-19 around the world, including in the United
              States. On January 31, 2020, the virus pass from one person to another in the U.S.
              Coronaviruses are a type of virus. There are many different kinds."/>
              <Button type="primary" dest="#Symptoms" content="Symptoms"/>
            </div>
          </div>
        </div>
        <div className="symptoms section" id="Symptoms">
          <div className="container flex">
            <div className="info">
              <Tag content="COVID-19 Symptoms"/>
              <Title color={dark} size="2rem" content="What are the symptoms?"/>
              <Text color={gray} content="It's important to know what symptoms are associated. Please seek medical attention if you are experiencing:"/>
              <ul>
                <li className="flex direction-row align-center"><FontAwesomeIcon icon={faCheckCircle}/><Text color={gray} content="Sore Throat"/></li>
                <li className="flex direction-row align-center"><FontAwesomeIcon icon={faCheckCircle}/><Text color={gray} content="Fever"/></li>
                <li className="flex direction-row align-center"><FontAwesomeIcon icon={faCheckCircle}/><Text color={gray} content="Runny nose"/></li>
                <li className="flex direction-row align-center"><FontAwesomeIcon icon={faCheckCircle}/><Text color={gray} content="Headache"/></li>
                <li className="flex direction-row align-center"><FontAwesomeIcon icon={faCheckCircle}/><Text color={gray} content="Fatigue"/></li>
                <li className="flex direction-row align-center"><FontAwesomeIcon icon={faCheckCircle}/><Text color={gray} content="Dry Cough"/></li>
              </ul>
              <Button type="primary" dest="#Prevention" content="Prevention"/>
            </div>
            <div>

            </div>
          </div>
        </div>
        <div className="prevention section" id="Prevention">
          <div className="container">
            <Tag content="Prevention"/>
            <Title color={dark} size="2rem" content="How to Stay Safe"/>
            <Text color={dark} content="Even if you feel that you are healthy, it is good to keep these precautions in mind for those around you."/>
            <div className="flex">
              <div className="sub-info">
                <img src={mask} alt="Wear a mask"/>
                <Title color={dark} size="1.25rem" content="Wear a mask"/>
                <Text color={gray} content="This has proven to be very effective. Make you are wearing a mask in public areas for the interest of others."/>
              </div>
              <div className="sub-info">
                <img src={wash} alt="Wash you hands"/>
                <Title color={dark} size="1.25rem" content="Wash you hands"/>
                <Text color={gray} content="When washing, be sure to clean every part of your hand, even wrists. Hand washing should take at least 20 seconds."/>
              </div>
              <div className="sub-info">
                <img src={cough} alt="Cough in your arm"/>
                <Title color={dark} size="1.25rem" content="Cough in your arm"/>
                <Text color={gray} content="It is said that coughs and sneeze droplets travel a couple of feet. Be sure to cover it up with your arm, for most effectiveness."/>
              </div>
              <div className="sub-info">
                <img src={clean} alt="Clean and disinfect"/>
                <Title color={dark} size="1.25rem" content="Clean and disinfect"/>
                <Text color={gray} content="After staying in a public area, be sure to clean and disinfect any parts you may have touched, for the benefit of the next person."/>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App
