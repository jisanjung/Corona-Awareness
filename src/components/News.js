import React, { Component } from 'react'

const API_KEY = process.env.REACT_APP_API_KEY;
let url = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${API_KEY}`;

export class News extends Component {

    render() {
        return (
            <div>
                <h1>Latest News</h1>
            </div>
        )
    }
}

export default News