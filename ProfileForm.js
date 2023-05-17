import React, {useRef, useContext} from 'react';
import AuthContext from '../../Store/auth-context';
import {useHistory} from 'react-router-dom'
import classes from './ProfileForm.module.css';



const ProfileForm = () => {
  const history = useHistory();
   
  const AuthCtx=useContext(AuthContext)

  const newPasswordInputRef=useRef();
  
  const submitHandler=(event)=>{
    event.preventDefault()

    const enteredNewPassword=newPasswordInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCl42bWKBnyvnPaQ2ZlSFm36HyuezHAWu0',
    {
      method:'POST',
      body: JSON.stringify({
        idToken:AuthCtx.token,
        password:enteredNewPassword,
        returnSecureToken:true

      }),
      headers:{
        'Context-Type':'application/json'
      }
    }).then(res => {
      console.log(res)
      history.replace('/')

    })
  }

  
  return (
    <form className={classes.form} onSubmit={submitHandler} >
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7'  ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
