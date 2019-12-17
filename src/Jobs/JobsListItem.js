import React from "react";
import moment from "moment";

export default function JobsListItem({job}) {
    const howToApplyLink = cutLinkFromGitApi(job.how_to_apply);
    const date = new Date(job.created_at);
    const formattedDate = moment(date).format('LL');
    return (
        <a href={howToApplyLink} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 pt-3 justify-content-between">
                <h5 className="card-title text-primary">{job.title}</h5>
                <p>{job.location}</p>
            </div>
            <div className="d-flex w-100 justify-content-between">
                <p>{job.company} - <span className={"text-success font-weight-bold"}>{job.type}</span></p>
                <small className="text-muted">{formattedDate}</small>
            </div>
        </a>
    )
}

function cutLinkFromGitApi(string) {
    return string.slice(string.indexOf('href')).split("\"")[1];
}
