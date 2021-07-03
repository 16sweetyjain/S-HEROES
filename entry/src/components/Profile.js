import React, {useState }  from  'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer,toast  } from 'react-toastify';
import { useHistory } from 'react-router-dom';

export default function Profile () {

    const userEmail = useSelector( state => state.userEmail.email);
    const history = useHistory();
    const [profile,setUserProfile] = useState({
        name:'',age:'',height:'',weight:''
    });

    const handleChange = (e) => {
        e.preventDefault();
        setUserProfile({ ...profile, [e.target.id]:e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();

        const userProfile = {
            age:profile.age,
            name:profile.name,
            height:profile.height,
            weight:profile.weight,
            email:userEmail
        };

        axios.post('/profile',userProfile)
        .then((response)=>{
            console.log(response);
            history.push('/dashboard');
        })
        .catch((error) => {
            let errorMessage = error.response.data.errors;
            errorMessage.map( e => toast.error(e.error,{ position: toast.POSITION.BOTTOM_RIGHT , autoClose: 1000 } ));
        });
    };

    return (
        <div className='container'>
            <div className="row"   style = { { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
                <form className="col">
                    <div className="row">
                        <div className="input-field col s12" style = { { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
                            <h3> Create your profile </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 ">
                            <input id="name" type="text" className="validate" value={ profile.name } onChange={ handleChange }/>
                            <label > Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 ">
                            <input id="age" type="text" className="validate" value={ profile.age}  onChange={ handleChange }/>
                            <label>Age</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 ">
                            <input id="height" type="text" className="validate" value={ profile.height }  onChange={ handleChange }/>
                            <label > Height</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 ">
                            <textarea id="weight" className="materialize-textarea" value = { profile.weight} onChange={handleChange}></textarea>
                            <label >Weight</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 " style={{ textAlign:'center' }}>
                            <button className="btn btn-large btn-dark" onClick={ handleSubmit }>
                          Create Profile
                            </button>
                            <ToastContainer/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}