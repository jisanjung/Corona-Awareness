import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import moment from "moment";

const Article = (props) => {

    // content for article
    const { urlToImage, title, url, publishedAt } = props.content;

    // icons
    const rightArrow = <FontAwesomeIcon icon={faArrowRight}/>
    const calendar = <FontAwesomeIcon icon={faCalendarAlt}/>

    // functions
    const formatDate = date => {
        return moment(date).format("LL").toString();
    }

    return (
        <li className="article">
            <div className="img-wrap">
                <img src={urlToImage} alt={title}/>
            </div>
            <div className="info">
                <h3>{title}</h3>
                <a className="text-dark flex align-center" href={url}>Read More<span>{rightArrow}</span></a>
                <span className="date-posted block"><span>{calendar}</span>{formatDate(publishedAt)}</span>
            </div>
        </li>
    )
}

export default Article
