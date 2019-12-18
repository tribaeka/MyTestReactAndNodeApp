import React, {useEffect} from "react";
import Loader from "../Loader";
import JobsList from "./JobsList";
import JobsHotSearches from "./JobsHotSearches";
import {Context} from "../context";
import * as _ from "lodash";
import FilterJobsForm from "../forms/FilterJobsForm";


export default function JobsPage() {
    const initOptions = {page: 1};
    const [jobs, setJobs] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [loadOptions, setLoadOptions] = React.useState(initOptions);

    useEffect(() => {
        loadJobs(loadOptions);
    }, []);

    function loadJobs(options) {
        setLoading(true);
        setJobs([]);
        fetch(getCorrectedJobsFetchUrl(options))
            .then(response => {
                if (options.page < 1) setLoadOptions(initOptions);
                return response.json();
            })
            .then(json => {
                if (!_.isEmpty(json)) {
                    setJobs(json);
                } else {
                    setLoadOptions(initOptions);
                    loadJobs(initOptions);
                }
                setLoading(false);
            });
    }

    function getCorrectedJobsFetchUrl(options) {
        let proxyServerUrl = 'http://localhost:8080/api/jobs?';
        if (options.hasOwnProperty('page')) {
            proxyServerUrl = proxyServerUrl.concat('page=' + options.page.toString() + '&');
        }
        if (options.hasOwnProperty('fullTime')) {
            proxyServerUrl = proxyServerUrl.concat('fullTime=' + options.fullTime.toString() + '&');
        }
        if (options.hasOwnProperty('specificationFilter') && !!options.specificationFilter){
            proxyServerUrl = proxyServerUrl.concat('specificationFilter=' + options.specificationFilter.toString() + '&');
        }
        if (options.hasOwnProperty('locationFilter') && !!options.locationFilter){
            proxyServerUrl = proxyServerUrl.concat('locationFilter=' + options.locationFilter.toString() + '&');
        }
        return proxyServerUrl;
    }

    return (
        <Context.Provider value={{
            loadJobs, setLoadOptions
        }}>
            <div className="container-fluid">
                {loading && <Loader/>}
                <div className="row my-4">
                    <div className="col-8 offset-1">
                        {!loading && <FilterJobsForm loadOptions={loadOptions}/>}
                        <JobsList
                            jobs={jobs}
                            loadOptions={loadOptions}
                        />
                    </div>
                    <div className="col-2">
                        {!loading && <JobsHotSearches/>}
                    </div>
                </div>
            </div>
        </Context.Provider>
    )
}
