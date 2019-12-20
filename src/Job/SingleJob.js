import React from "react";
import SingleJobSideBar from "./SingleJobSideBar";
export default function SingleJob({job}) {

    return (
        <div className="row mt-5">
            <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        <p className="upper-title">{job.company} / {job.type}</p>
                        <h1>{job.title}</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div dangerouslySetInnerHTML={{__html: job.description}}/>
                    </div>
                    <SingleJobSideBar
                        company={job.company}
                        companyLogo={job.company_logo}
                        companyUrl={job.company_url}
                        howToApply={job.how_to_apply}
                    />
                </div>
            </div>
        </div>
    )
}
