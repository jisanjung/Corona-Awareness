import React, { Component } from 'react';
import axios from "axios";
import Header from './Header';
import Title from './Title';
import Article from './Article';
import Pagination from './Pagination';
import Footer from "./Footer";
import Input from './Input';
import Loading from './Loading';

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
            postsPerPage: 10,
            input_val: "",
            loading: true
        }
    }

    componentDidMount() {
        axios.get(url)
            .then(res => {
                this.setState({loading: false})
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
    
    // filter articles 
    handleSearch(e) {
        this.setState({
            input_val: e.target.value
        });
    }

    loading() {
        if (this.state.loading) {
            console.log("loading");
        } 
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
                    <div className="flex flex-response flex-between ">
                        <Title size="1.5rem" content="Latest News"/>
                        <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.news.length} current={this.state.currentPage} paginate={this.paginate.bind(this)}/>
                    </div>
                    <form>
                        <Input search={this.handleSearch.bind(this)}/>
                    </form>
                    <ul className="articles flex">
                        {this.state.loading ? <Loading/> : <span></span>} 
                        {currentPosts.filter(val => {
                            if (this.state.input_val === "") {
                                return val
                            } else if (val.title.toLowerCase().includes(this.state.input_val.toLowerCase())) {
                                return val
                            }
                        }).map((article, i) => {
                            return (
                                <Article key={i} content={article}/>
                            )
                        })}
                    </ul>
                </div>
                <div className="bottom">
                    <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.news.length} current={this.state.currentPage} paginate={this.paginate.bind(this)}/>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default News