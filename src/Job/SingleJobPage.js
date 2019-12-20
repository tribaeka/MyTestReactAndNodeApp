import React, {useEffect} from "react";
import Loader from "../Loader";
import { useParams } from "react-router-dom";
import SingleJob from "./SingleJob";

export default function JobsList() {
    const { jobId } = useParams();
    const [job, setJob] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        loadJob(jobId);
    }, []);

    function loadJob(id) {
        setLoading(true);
        fetch(getUrlForSingleJobFetch(id))
            .then(response => response.json())
            .then(json => {
                setJob(json);
                setLoading(false);
            });
    }

    function getUrlForSingleJobFetch(id) {
        return 'http://localhost:8080/api/job?id=' + id.toString();
    }


    return (
        <div className="container">
            {loading && <Loader/>}
            {!loading && <SingleJob job={job}/>}
        </div>
    )
}
