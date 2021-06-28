import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer,toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import setUserEmail from '../actions/setUserEmail';
import auth from '../Auth';

export default function Signin() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUserDetails] = useState({
        email:'',
        password:''
    });

    const onSubmit = e => {
        e.preventDefault();
        const userDetails = { 
            email:user.email,
            password:user.password,
        };
        axios.post('/signin',userDetails)
            .then((response) => {
                console.log(response);
                console.log('login success');
                dispatch(setUserEmail(user.email));
                auth.signin(() => {
                    if(Object.prototype.hasOwnProperty.call(response.data.message,'profile')){
                        history.push('/dashboard');   
                    }
                    else{
                        history.push('/profile');
                    }
                });
            })
            .catch((error) => {
                let errorMessage = error.response.data.errors;
                errorMessage.map( e => toast.error(e.error,{ position: toast.POSITION.BOTTOM_RIGHT , autoClose: 1000 } ));
            });
    };

    const onChangeHandler = e => {
        setUserDetails({ ...user, [e.target.id]:e.target.value });
        
    };

    return(
        <div>
            <div  style={ { height: '90vh' } } className='container'>
                <div className="row " >
                    <form className="col s12" style  = {{ marginTop:'100px' }}>
                        <div className="row">
                            <div className="input-field col s12 black-text" style = { { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
                                <h3>Login</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 center-align ">
                                <input id="email" type="email" className="validate" value={ user.email } onChange={ onChangeHandler }/>
                                <label> <b>Email</b> </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 center-align ">
                                <input id="password" type="password" className="validate" value={ user.password } onChange={ onChangeHandler }/>
                                <label> <b>Password</b> </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12" style = { { textAlign:'center' } }>
                                <button style={ { width: '100px', borderRadius: '3px', letterSpacing: '1.5px' } } className="btn btn-large btn-dark" onClick={ onSubmit }>Login</button>
                                <ToastContainer/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ); 
}
