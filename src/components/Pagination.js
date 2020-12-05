import React from 'react'

const Pagination = (props) => {

    const { postsPerPage, totalPosts, paginate, current } = props;
    const pageNumbers = [];

    // add pagenumbers
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination flex flex-center">
            <ul className="flex">
                {pageNumbers.map(num => {
                    return (
                    <li key={num} className={`flex flex-center align-center ${num === current ? "active" : ""}`}>
                        <a href="#Header" onClick={() => paginate(num)}>
                            {num}
                        </a>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Pagination