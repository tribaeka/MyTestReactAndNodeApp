import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";

export default function JobsListItem({job}) {
    const date = new Date(job.created_at);
    const formattedDate = moment(date).format('LL');
    const jobItemLink = 'job/' + job.id.toString();
    return (
        <Link to={jobItemLink} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 pt-3 justify-content-between">
                <h5 className="card-title text-primary">{job.title}</h5>
                <p>{job.location}</p>
            </div>
            <div className="d-flex w-100 justify-content-between">
                <p>{job.company} - <span className={"text-success font-weight-bold"}>
                    {job.type}
                </span></p>
                <small className="text-muted">{formattedDate}</small>
            </div>
        </Link>
    )
}

