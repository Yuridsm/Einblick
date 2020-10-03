import React, { Component } from 'react';

import './App.css';
import Global from './styles/Global';

import { Routes } from './routes';

class App extends Component {
    constructor() {
        super();

        this.state = {
            database: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/')
        .then(response => response.json())
        .then(data => data.setState({ database: data }));
    }

    render() {
        return (
            <>
                <Routes/>
                <Global/>
            </>
        );
    }
}

export default App;
