import React, { Component } from 'react';
import axios from "axios";

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
        return (
            <div className="news">
                <h1>Latest News</h1>
                <ul className="articles">
                    {this.state.news.map((article, i) => {
                        return (
                            <li key={i} className="article">
                                <img src={article.urlToImage} alt={i}/>
                                <h3>{article.title}</h3>
                                <a href={article.url}>Read More</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default News