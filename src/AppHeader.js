import React, {useContext} from "react";
import logo from './logo.svg';
import {Context} from "./context";

export default function AppHeader({loadOptions}) {
    const {loadJobs} = useContext(Context);
    let specificationFilter;
    let locationFilter;
    let fullTimeCheckBox = false;
    function filterHandler(event) {
        event.preventDefault();
        console.log(event);
    }

    function handleSpecificationFilterChange(event) {
        specificationFilter = event.target.value;
    }

    function handleLocationFilterChange(event) {
        locationFilter = event.target.value;
    }

    function handleFullTimeCheckBoxChange(event) {
        fullTimeCheckBox = !!fullTimeCheckBox;
    }
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="45" height="45" alt=""/>
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SomeFutureItem</a>
                        </li>
                    </ul>
                    <form onSubmit={(event => filterHandler(event))}
                          className="form-inline my-2">
                        <input type="text"
                               className="form-control mx-1"
                               placeholder="Specification Filter"
                               onChange={(event => handleSpecificationFilterChange(event))}/>
                        <input type="text"
                               className="form-control mx-1"
                               placeholder="Filter#2"
                               onChange={(event => handleLocationFilterChange(event))}/>
                        <label htmlFor="fullTimeCheckBox"
                               className="text-light mx-1">Full time</label>
                        <input id="fullTimeCheckBox"
                               type="checkbox"
                               className="form-control mx-1"
                               onChange={(event => handleFullTimeCheckBoxChange(event))}/>/>
                        <button className="btn btn-outline-success my-2"
                                type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}
