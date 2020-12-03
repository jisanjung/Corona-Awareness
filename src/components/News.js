import React, { Component } from 'react';
import axios from "axios";
import Header from './Header';
import Title from './Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const API_KEY = process.env.REACT_APP_API_KEY;
let url = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${API_KEY}`;

export class News extends Component {

    constructor() {
        super();
        this.state = {
            error: false,
            news: [],
            message: "" // if an error occurs update this message
        }
    }

    componentDidMount() {
        axios.get(url)
            .then(res => {
                this.setState({
                    news: [...res.data.articles]
                }, () => console.log(this.state.news));
            })
            .catch(err => {
                this.setState({
                    error: true,
                    message: "Something went wrong"
                }, () => console.log(this.state.message));
            });
    }

    render() {

        const rightArrow = <FontAwesomeIcon icon={faArrowRight}/>

        return (
            <div className="news">
                <Header/>
                <div className="container">
                    <Title size="1.5rem" content="Latest News"/>
                    <ul className="articles">
                        {this.state.news.map((article, i) => {
                            return (
                                <li key={i} className="article">
                                    <div className="img-wrap">
                                        <img src={article.urlToImage} alt={i}/>
                                    </div>
                                    <div className="info">
                                        <h3>{article.title}</h3>
                                        <a className="text-dark flex align-center" href={article.url}>Read More<span>{rightArrow}</span></a>
                                        <span className="date-posted block">{article.publishedAt}</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default News