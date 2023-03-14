import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from 'redux/auth/authOperations';
import { isUserLogin } from 'redux/auth/authSelectors';

import { LoginForm } from 'components/LoginForm/LoginForm';
import styles from './loginPage.module.css';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className={styles.container}>
      <LoginForm onSubmit={handleSignup} />
    </div>
  );
};

export default LoginPage;
