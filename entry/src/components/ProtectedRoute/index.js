import { React } from 'react';
import { Route } from 'react-router-dom';
import auth from './Auth.js';
import ErrorPage from './ErrorPage.js';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return(
        <Route { ...rest } render = { props => {
            if(auth.isAuthenticated()){
                return <Component { ...props }/>;
            }
            else{
                return <ErrorPage/>;
            }
        } }
        />
    );
};
export default ProtectedRoute;