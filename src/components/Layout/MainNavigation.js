import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';
import { useHistory } from 'react-router-dom';

const MainNavigation = () => {
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const IsLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/auth');
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!IsLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {IsLoggedIn && (
            <li>
             <Link to='/profile'>Profile</Link>
           </li>
          )}
          {IsLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
           </li>
           )}
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
