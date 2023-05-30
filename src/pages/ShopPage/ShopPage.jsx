import { ShopList } from 'components/ShopList/ShopList';

import styles from './ShopPage.module.css';
const ShopPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Shop PAGE</p>
      <ShopList />
    </div>
  );
};

export default ShopPage;
