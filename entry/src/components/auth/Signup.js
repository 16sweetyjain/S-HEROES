import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const history = useHistory();
    const [user, setUserDetails] = useState({
        email:'',
        password:'',
        passwordConfirmation:''
    });
      
    const onSubmit = e => {
        e.preventDefault();
        const newUser = {
            email:user.email,
            password:user.password,
            passwordConfirmation:user.passwordConfirmation
        };
        axios.post('/signup',newUser)
            .then((response) => {
                console.log(response);
                history.push('/signin');
            })
            .catch(error => {
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
                <div className="row"  style = { { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
                    <form className=" col s12">
                        <div className="row">
                            <div className="input-field col s12 black-text" style = { { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
                                <h3>Register</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 black-text">
                                <input id="email" type="email" className="validate" value={ user.email } onChange={onChangeHandler}/>
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 black-text">
                                <input id="password" type="password" className="validate" value={ user.password } onChange={onChangeHandler}/>
                                <label>Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 black-text">
                                <input id="passwordConfirmation" type="password" className="validate" value={ user.passwordConfirmation } onChange={onChangeHandler}/>
                                <label>Confirm Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12" style = { { textAlign:'center' } }>
                                <button className="btn btn-large btn-dark" onClick={onSubmit}>Register</button>
                                <ToastContainer/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

