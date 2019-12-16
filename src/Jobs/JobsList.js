import React from "react";
import JobsListItem from './JobsListItem';
import JobsPages from "./JobsPages";
import * as _ from 'lodash';

export default function JobsList(props) {

    return (
        <div className="list-group list-group-flush">
            {props.jobs.map(job => {
                return (
                    <JobsListItem
                        job={job}
                        key={job.id}
                    />
                )
            })}
            {!_.isEmpty(props.jobs) && <JobsPages loadOptions={props.loadOptions}/>}
        </div>
    )
}
