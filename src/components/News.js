import React, { Component } from 'react';
import axios from "axios";
import Header from './Header';
import Title from './Title';
import Article from './Article';
import Pagination from './Pagination';

const API_KEY = process.env.REACT_APP_API_KEY;
let url = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${API_KEY}`;

export class News extends Component {

    constructor() {
        super();
        this.state = {
            error: false,
            news: [],
            message: "", // if an error occurs update this message
            currentPage: 1,
            postsPerPage: 10
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

    // change page 
    paginate(num) {
        this.setState({
            currentPage: num
        });
    } 

    render() {

        // get current posts
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.news.slice(indexOfFirstPost, indexOfLastPost);

        return (
            <div className="news">
                <Header/>
                <div className="container">
                    <Title size="1.5rem" content="Latest News"/>
                    <ul className="articles flex">
                        {currentPosts.map((article, i) => {
                            return (
                                <Article key={i} content={article}/>
                            )
                        })}
                    </ul>
                </div>
                <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.news.length} paginate={this.paginate.bind(this)}/>
            </div>
        )
    }
}

export default News