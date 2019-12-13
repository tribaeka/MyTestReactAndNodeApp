import React, {useEffect} from 'react';
import {Context} from "./context";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import JobsList from "./Jobs/JobsList";
import JobsHotSearches from "./Jobs/JobsHotSearches";
import './App.css';
import Loader from "./Loader";
import * as _ from 'lodash';


function App() {
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
        console.log(proxyServerUrl);
        return proxyServerUrl;
    }

    return (
        <Context.Provider value={{
            loadJobs, setLoadOptions
        }}>
            <AppHeader loadOptions={loadOptions}/>
            <div className="container-fluid">
                <div className="row">
                    {loading && <Loader/>}
                </div>
                <div className="row my-4">
                    <div className="col-8 offset-1">
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
            <AppFooter/>
        </Context.Provider>
    );
}

export default App;
