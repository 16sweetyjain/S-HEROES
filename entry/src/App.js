import './App.css';
import { React } from 'react';
import { Route, Switch } from 'react-router-dom';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup.js';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import PeriodTracker from './components/features/PeriodTracker';

export default function App () {
   
    return (
        <div>
            <Switch>
                <Route exact path ='/' component = {() => <HomePage/>}/>
                <Route  path='/signin' component={() => <Signin />}/>
                <Route  path='/signup' component={() => <Signup />}/>
                <Route path='/dashboard' component={() => <Dashboard/>}/>
                <Route path = '/periodTracker' component = {() => <PeriodTracker/>}/>
            </Switch>
        </div>
    );
}