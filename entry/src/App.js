import './App.css';
import { React } from 'react';
import { Route, Switch } from 'react-router-dom';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup.js';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import PeriodTracker from './components/features/PeriodTracker';
import ReproductiveHealth from './components/features/ReproductiveHealth';
import Awareness from './components/features/Awareness';
import BirthControl from './components/features/BirthControl';
import MentalHealth from './components/features/MentalHealth';
import Reports from './components/features/Reports';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import MenstrualCondition from './components/features/MenstrualCondition';
import MenstrualAnalysis from './components/features/MenstrualAnalysis';

export default function App() {

    return (
        <div className="container">
            <Switch>
                <Route exact path='/' component={() => <HomePage />} />
                <Route path='/signin' component={() => <Signin />} />
                <Route path='/signup' component={() => <Signup />} />
                <Route path='/dashboard' component={() => <Dashboard />} />
                <Route path='/periodTracker' component={() => <PeriodTracker />} />
                <Route path='/reproductiveHealth' component={() => <ReproductiveHealth />} />
                <Route path='/mentalHealth' component={() => <MentalHealth />} />
                <Route path='/birthControl' component={() => <BirthControl />} />
                <Route path='/reports' component={() => <Reports />} />
                <Route path='/awareness' component={() => <Awareness />} />
                <Route path='/profile' component={() => <Profile />} />
                <Route path='/menstrualCondition'  component={()=> <MenstrualCondition/>}/>
                <Route path='/menstrualAnalysis'  component={()=> <MenstrualAnalysis/>}/>
            </Switch>
        </div>
    );
}