import React , {useContext} from "react";
import {Context} from "../context";

export default function JobsPages({page}) {
    const {loadPage} = useContext(Context);
    return (
        <nav className="mx-auto my-3" aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"
                    onClick={() => loadPage(page - 1)}>
                    <a className="page-link" href="#">Previous</a>
                </li>
                {page !== 1 && <li className="page-item"
                                   onClick={() => loadPage(page - 1)}>
                    <a className="page-link" href="#">{page - 1}</a>
                </li>}
                <li className="page-item">
                    <p className="page-link">{page}</p>
                </li>
                <li className="page-item"
                    onClick={() => loadPage(page + 1)}>
                    <a className="page-link" href="#">{page + 1}</a>
                </li>
                <li className="page-item"
                    onClick={() => loadPage(page + 1)}>
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}
