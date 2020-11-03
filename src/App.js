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
        <div className="about section">
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
        <div className="symptoms section">
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
      </div>
    )
  }
}

export default App
