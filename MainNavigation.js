import { Link } from 'react-router-dom';
import React,{useContext} from 'react';

import classes from './MainNavigation.module.css';
import AuthContext from '../../Store/auth-context';

const MainNavigation = () => {


  const AuthCtx=useContext(AuthContext);

  const isLoggedIn=AuthCtx.isLoggedIn

  const logoutHandler=()=>{
    AuthCtx.logout();
    console.log('logout')
   
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (<li>
            <Link to='/auth'>Login</Link>
          </li>)}
          
          {isLoggedIn && (<li>
            <Link to='/profile'>Profile</Link>
          </li>)}
          
          {isLoggedIn && (<li>
            <button onClick={logoutHandler}>Logout</button>
          </li>)}
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
