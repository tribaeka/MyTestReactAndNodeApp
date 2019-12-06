import React, { useEffect } from 'react';
import AppHeader from "./AppHeader";
import './App.css';

function App() {
    useEffect(() => {
        const headers = new Headers();
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/');
        fetch('https://jobs.github.com/positions.json?description=ruby&page=1',
            {
                method: 'GET',
                headers: headers
            })
            .then(response => response.json())
            .then(json => console.log(json))
    }, []);
    return (
        <div className="container">
            <AppHeader/>
        </div>
    );
}

export default App;
