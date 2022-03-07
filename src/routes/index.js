import { createRoutes } from '../utils/core';
import FrontEndLayout from '../layouts/FrontEndLayout';
import Home from './FrontEnd/Home';

const routesConfig = app => [
  {
    path: '/',
    title: 'Lara Renovations',
    component: FrontEndLayout,
    childRoutes: [
      Home(app),
      // 💬 generate admin to here
    ]
  },
];

export default app => createRoutes(app, routesConfig);
