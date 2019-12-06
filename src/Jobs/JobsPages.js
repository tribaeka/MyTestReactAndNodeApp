import React from "react";


export default function JobsPages({page, setPage}) {

    return (
        <nav className="mx-auto my-3" aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                {page !== 1 && <li className="page-item"><a className="page-link" href="#">{page - 1}</a></li>}
                <li className="page-item"><a className="page-link" href="#">{page}</a></li>
                <li className="page-item"><a className="page-link" href="#">{page + 1}</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    )
}
