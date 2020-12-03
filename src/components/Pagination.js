import React from 'react'

const Pagination = (props) => {

    const { postsPerPage, totalPosts, paginate } = props;

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="flex">
                {pageNumbers.map(num => {
                    return (
                    <li key={num}>
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