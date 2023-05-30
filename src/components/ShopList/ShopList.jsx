import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllShops } from 'redux/shops/shopsOperations';
import { selectAllShops } from 'redux/shops/shopsSelectors';

import { ShopListItem } from './ShopListItem/ShopListItem';

export const ShopList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllShops());
  }, [dispatch]);

  const list = useSelector(selectAllShops);
  const isShops = Boolean(list.length);

  return (
    <div>
      {isShops && (
        <ul>
          {list.map(({ _id: id, name, phone }) => {
            return <ShopListItem key={id} name={name} number={phone} id={id} />;
          })}
        </ul>
      )}
      {!isShops && <p>There are no shops!</p>}
    </div>
  );
};
