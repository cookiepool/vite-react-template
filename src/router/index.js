import React from 'react';

const Home = React.lazy(() => import('../views/Home'));
const About = React.lazy(() => import('../views/About'));
const EmotionCss = React.lazy(() => import('../views/EmotionCss'));
const AntdTest = React.lazy(() => import('../views/AntdTest'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    exact: true,
    component: About
  },
  {
    path: '/emotion-css',
    exact: true,
    component: EmotionCss
  },
  {
    path: '/antd-test',
    exact: true,
    component: AntdTest
  }
];

export default routes;
