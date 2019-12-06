import React, { useEffect } from 'react';
import AppHeader from "./AppHeader";
import JobsList from "./Jobs/JobsList";
import './App.css';
import Loader from "./Loader";

function App() {
    const [jobs, setJobs] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        fetch('http://localhost:8080/api/jobs?page='.concat(page.toString()))
            .then(response => response.json())
            .then(json => {
                setJobs(json);
                setLoading(false);
            })
    }, []);
    return (
        <div className="container-fluid">
            <AppHeader/>
            <div className="row">
                {loading && <Loader/> }
            </div>
            <div className="row my-4">
                <div className="col-9">
                    <JobsList
                        jobs={jobs}
                        page={page}
                        setPage={setPage}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
