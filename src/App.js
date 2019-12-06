import React, { useEffect } from 'react';
import {Context} from "./context";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import JobsList from "./Jobs/JobsList";
import './App.css';
import Loader from "./Loader";

function App() {
    const [jobs, setJobs] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        loadJobs();
    }, []);

    function loadJobs() {
        setLoading(true);
        fetch('http://localhost:8080/api/jobs?page='.concat(page.toString()))
            .then(response => response.json())
            .then(json => {
                setJobs(json);
                setLoading(false);
            })
    }

    function loadPage(newPage) {
        setPage(newPage);
        setJobs([]);
        loadJobs();
    }

    return (
        <Context.Provider value={{
            loadJobs, loadPage
        }}>
            <AppHeader/>
            <div className="container-fluid">
                <div className="row">
                    {loading && <Loader/> }
                </div>
                <div className="row my-4">
                    <div className="col-8 offset-2">
                        <JobsList
                            jobs={jobs}
                            page={page}
                        />
                    </div>
                </div>
            </div>
            <AppFooter/>
        </Context.Provider>
    );
}

export default App;
