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
        <div>
            <Switch>
                <Route exact path='/' component={() => <HomePage />} />
                <Route path='/signin' component={() => <Signin />} />
                <Route path='/signup' component={() => <Signup />} />
                <ProtectedRoute path='/dashboard' component={() => <Dashboard />} />
                <ProtectedRoute path='/periodTracker' component={() => <PeriodTracker />} />
                <ProtectedRoute path='/reproductiveHealth' component={() => <ReproductiveHealth />} />
                <ProtectedRoute path='/mentalHealth' component={() => <MentalHealth />} />
                <ProtectedRoute path='/birthControl' component={() => <BirthControl />} />
                <ProtectedRoute path='/reports' component={() => <Reports />} />
                <ProtectedRoute path='/awareness' component={() => <Awareness />} />
                <ProtectedRoute path='/profile' component={() => <Profile />} />
                <ProtectedRoute path='/menstrualCondition'  component={()=> <MenstrualCondition/>}/>
                <ProtectedRoute path='/menstrualAnalysis'  component={()=> <MenstrualAnalysis/>}/>
            </Switch>
        </div>
    );
}