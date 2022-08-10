import { Routes, Route } from 'react-router-dom';
import { FC } from 'react';

import FirstPage from '../ui/pages/FirstPage/FirstPage';
import SecondPage from '../ui/pages/SecondPage/SecondPage';
import ThirdPage from '../ui/pages/ThirdPage/ThirdPage';

interface AppRoute {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<unknown>;
}

export const routes: Array<AppRoute> = [
  {
    key: 'firstPage',
    title: 'First Page',
    path: '/',
    enabled: true,
    component: FirstPage,
  },
  {
    key: 'secondPage',
    title: 'Second Page',
    path: '/secondPage',
    enabled: true,
    component: SecondPage,
  },
  {
    key: 'thirdPage',
    title: 'Third Page',
    path: '/thirdPage',
    enabled: true,
    component: ThirdPage,
  },
];

export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={route.key}
            path={route.path}
            element={<route.component />}
          />
        );
      })}
    </Routes>
  );
};
