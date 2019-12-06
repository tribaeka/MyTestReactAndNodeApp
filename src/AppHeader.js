import React from "react";
import logo from './logo.svg';

export default function AppHeader() {
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
                </div>
            </nav>
        </header>
    )
}
