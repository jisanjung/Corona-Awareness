import React, { Component } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Text from "./components/Text";
import "./sass/main.scss";
import Button from './components/Button';
import about from "./images/about.png";
import Tag from './components/Tag';

export class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
        <div className="home">
          <div className="container"> 
            <Title color="#294e7d" size="1.125rem" content="Stay Home, Stay Safe"/>
            <Title color="#706ad4" size="2.25rem" content="Protect Yourself From Coronavirus (COVID-19)"/>
            <Text color="#8a8eaa" content="Learn how to help flatten the curve of a deadly virus."/>
            <Button type="primary" content="Prevention"/>
            <Button type="light" content="Tracker"/>
          </div>
        </div>
        <div className="about">
          <div className="container flex">
            <div className="img-wrap">
              <img src={about} alt="About"/>
            </div>
            <div className="info">
              <div id="tag">
                <Tag content="About COVID-19"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
