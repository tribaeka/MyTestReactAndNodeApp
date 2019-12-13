import React, {useContext} from "react";
import {Context} from "../context";

export default function JobsHotSearches() {
    const hotSearchesMap = new Map([
        ['PHP', {
            specificationFilter: 'PHP',
            page: 1
        }],
        ['Rails', {
            specificationFilter: 'Rails',
            page: 1
        }],
        ['Python', {
            specificationFilter: 'Python',
            page: 1
        }],
        ['JavaScript', {
            specificationFilter: 'JavaScript',
            page: 1
        }],
        ['Scala', {
            specificationFilter: 'Scala',
            page: 1
        }],
        ['Android', {
            specificationFilter: 'Android',
            page: 1
        }],
        ['iOS', {
            specificationFilter: 'iOS',
            page: 1
        }],
        ['Linux', {
            specificationFilter: 'Linux',
            page: 1
        }],
        ['Erlang', {
            specificationFilter: 'Erlang',
            page: 1
        }],
        ['San Francisco', {
            locationFilter: 'San Francisco',
            page: 1
        }],
        ['New York City', {
            locationFilter: 'New York City',
            page: 1
        }],
        ['Austin,TX', {
            locationFilter: 'Austin,TX',
            page: 1
        }],
        ['London', {
            locationFilter: 'London',
            page: 1
        }],
        ['Europe', {
            locationFilter: 'Europe',
            page: 1
        }],
    ]);
    const {loadJobs} = useContext(Context);

    function hotSearchesHandler (title){
        loadJobs(hotSearchesMap.get(title.title));
    }

    return (
        <div>
            <h3>Hot Searches</h3>
            <hr/>
            {[...hotSearchesMap.keys()].map(title => {
                return (
                    <a href="javascript:void(0)"
                       className="badge badge-primary m-1"
                       onClick={() => hotSearchesHandler({title})}>
                        {title}
                    </a>
                )
            })}
        </div>
    )
}
