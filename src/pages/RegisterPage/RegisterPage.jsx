import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signup } from 'redux/auth/authOperations';
import { isUserLogin } from 'redux/auth/authSelectors';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import styles from './reisterPage.module.css';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={styles.container}>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
