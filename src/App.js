import React, {useEffect} from 'react';
import {Context} from "./context";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import JobsList from "./Jobs/JobsList";
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
            proxyServerUrl = proxyServerUrl.concat('page=' + options.page.toString());
            console.log(proxyServerUrl);
        }
        // todo add same if block for other search params
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
                    <div className="col-8 offset-2">
                        <JobsList
                            jobs={jobs}
                            loadOptions={loadOptions}
                        />
                    </div>
                </div>
            </div>
            <AppFooter/>
        </Context.Provider>
    );
}

export default App;
