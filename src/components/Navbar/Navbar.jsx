import { NavLink } from 'react-router-dom';

import styles from 'components/Navbar/Navbar.module.css';

export const Navbar = () => {
  return (
    <div>
      <NavLink to="/shop" className={styles.link}>
        Shop
      </NavLink>
      <NavLink to="/cart" className={styles.link}>
        Cart
      </NavLink>
      <NavLink to="/history" className={styles.link}>
        History
      </NavLink>
      <NavLink to="/cupons" className={styles.link}>
        Cupons
      </NavLink>
    </div>
  );
};
