import React , {useContext} from "react";
import {Context} from "../context";

export default function JobsPages({loadOptions}) {
    const {loadJobs} = useContext(Context);
    function goToNextPage() {
        loadOptions.page++;
        loadJobs(loadOptions);
    }

    function goToPrevPage() {
        loadOptions.page--;
        loadJobs(loadOptions);
    }
    return (
        <nav className="mx-auto my-3" aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"
                    onClick={() => goToPrevPage()}>
                    <a className="page-link" href="#">Previous</a>
                </li>
                {loadOptions.page !== 1 && <li className="page-item"
                                   onClick={() => goToPrevPage()}>
                    <a className="page-link" href="#">{loadOptions.page - 1}</a>
                </li>}
                <li className="page-item">
                    <p className="page-link" style={{color: "black"}}>{loadOptions.page}</p>
                </li>
                <li className="page-item"
                    onClick={() => goToNextPage()}>
                    <a className="page-link" href="#">{loadOptions.page + 1}</a>
                </li>
                <li className="page-item"
                    onClick={() => goToNextPage()}>
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}
