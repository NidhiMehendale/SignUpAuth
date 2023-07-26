import React ,{ useContext ,useRef} from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const history = useHistory();

  const newpasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
      event.preventDefault();

      const enteredNewPassword = newpasswordInputRef.current.value;
      //add validation
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCGFwS9sVAtyTS7hLCpP0SXbyDrC_YLKcg',{
          method: 'POST',
          body: JSON.stringify({
            idToken: authCtx.token,
            password: enteredNewPassword,
            returnSecureToken : false
          }),
          headers:{ 
            'Content-Type' : 'application/json'
          }
      }).then(res => {
        console.log('success');
        history.replace('/');
      });
  };


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newpasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
