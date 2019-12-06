import React from "react";
import JobsListItem from './JobsListItem';
import JobsPages from "./JobsPages";
import * as _ from 'lodash';

export default function JobsList(props) {

    return (
        <div className="list-group">
            {props.jobs.map(job => {
                return (
                    <JobsListItem
                        job={job}
                        key={job.id}
                    />
                )
            })}
            {!_.isEmpty(props.jobs) && <JobsPages page={props.page} setPage={props.setPage}/>}
        </div>
    )
}
