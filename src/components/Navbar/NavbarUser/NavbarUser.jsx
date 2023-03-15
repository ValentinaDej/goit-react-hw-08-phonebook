import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';
import Button from 'shared/Button/Button';
import styles from 'components/Navbar/NavbarUser/NavbarUser.module.css';

export const NavbarUser = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.navbarUser}>
      <p className={styles.email}>{email}</p>
      <Button title="Log out" type="submit" onClick={onLogout} />
    </div>
  );
};
