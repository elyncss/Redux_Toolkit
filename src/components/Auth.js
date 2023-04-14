import { authActions } from '../store/auth';
import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Auth = () => {
    const dispatch = useDispatch();
    const authShow = useSelector(state => state.auth.isAuthenticate);


  const login = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (

    <main className={classes.auth}>
      {<section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={login}>Login</button>
        </form>
      </section>}
    </main>
  );
};

export default Auth;
