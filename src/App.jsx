import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Layout } from 'components/Layout/Layout';

const ShopPage = lazy(() => import('pages/ShopPage/ShopPage'));
const CartPage = lazy(() => import('pages/CartPage/CartPage'));
const HistoryPage = lazy(() => import('pages/HistoryPage/HistoryPage'));
const CuponsPage = lazy(() => import('pages/CuponsPage/CuponsPage'));

export const App = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/cupons" element={<CuponsPage />} />
          <Route path="*" element={<ShopPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
