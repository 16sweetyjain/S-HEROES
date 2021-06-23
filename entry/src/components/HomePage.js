import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage(){
    return (
        <div>
            <div style={ { height: '90vh' } } className="container  valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align black-text ">
                        <h4>
                            <b>Welcome to Saheli </b> 
                        </h4>
                        <div className="col s6">
                            <Link to="/signup"className="btn btn-large btn-dark">
                                   Register
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link to="/signin" className="btn btn-large btn-dark">
                               Log In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
