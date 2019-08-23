import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import './App.css';
import Dashboard from './components/Dashboard'



const Page = ({ title }) => (
    <div className="App">
        <div className="App-header">
            <h2>{title}</h2>
        </div>
        <p className="App-intro">
            This is the {title} page.
        </p>
        <p>
            <Link to="/">Home</Link>
        </p>
        <p>
            <Link to="/about">About</Link>
        </p>
        <p>
            <Link to="/settings">Settings</Link>
        </p>
    </div>
);

const About = (props) => (
    <Page title="About"/>
);

const Settings = (props) => (
    <Page title="Settings"/>
);

class App extends Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Dashboard}/>
                <Route path="/about" component={About}/>
                <Route path="/settings" component={Settings}/>
            </Router>
        );
    }
}

export default App;