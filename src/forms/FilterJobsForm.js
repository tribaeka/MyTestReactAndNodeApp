import React, {useContext} from "react";
import {Context} from "../context";

export default function FilterJobsForm({loadOptions}) {
    const {loadJobs} = useContext(Context);
    const [specificationFilter, setSpecificationFilter] = React.useState('');
    const [locationFilter, setLocationFilter] = React.useState('');
    const [fullTimeCheckBox, setFullTimeCheckBox] = React.useState(false);
    function filterHandler(event) {
        event.preventDefault();
        loadOptions.specificationFilter = specificationFilter;
        loadOptions.locationFilter = locationFilter;
        loadOptions.fullTime = fullTimeCheckBox;
        loadJobs(loadOptions);
    }

    function handleSpecificationFilterChange(event) {
        setSpecificationFilter(event.target.value);
    }

    function handleLocationFilterChange(event) {
        setLocationFilter(event.target.value);
    }

    function handleFullTimeCheckBoxChange() {
        setFullTimeCheckBox(!fullTimeCheckBox)
    }
    return (
        <form onSubmit={(event => filterHandler(event))}
              className="form-inline my-2">
            <input type="text"
                   className="form-control mx-1"
                   placeholder="Specification Filter"
                   value={specificationFilter}
                   onChange={(event => handleSpecificationFilterChange(event))}/>
            <input type="text"
                   className="form-control mx-1"
                   placeholder="Location Filter"
                   value={locationFilter}
                   onChange={(event => handleLocationFilterChange(event))}/>
            <label htmlFor="fullTimeCheckBox"
                   className="text-light mx-1">Full time</label>
            <input id="fullTimeCheckBox"
                   type="checkbox"
                   className="form-control mx-1"
                   value={fullTimeCheckBox}
                   onChange={(event => handleFullTimeCheckBoxChange(event))}/>
            <button className="btn btn-outline-success my-2"
                    type="submit">Search</button>
        </form>
    )
}
