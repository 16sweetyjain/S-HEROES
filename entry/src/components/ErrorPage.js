import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage(){
    return(
        <div style={ { height: '75vh' } } className="container valign-wrapper">
            <div className="row">
                <div className="col s12 center-align">
                    <h4>
                        <b> ERROR 401</b> 
                    </h4>
                    <p className="flow-text white-text text-darken-1">
                        <h3>
                            You are not authorized to view this page.
                        </h3>
                    </p>
                    <div className="col s6">
                        <Link to="/" style={ { width: '1000px', borderRadius: '3px', letterSpacing: '1.5px' } } className="btn btn-large btn-dark">
                            Go to Home Page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}