import React from 'react';

const MainLayout = React.lazy(() => import('../pages/components/MainLayout'));
const Home = React.lazy(() => import('../pages/components/homes/Home'));
const Login = React.lazy(() => import('../pages/components/login/Login'));
const NotFound = React.lazy(() => import('../../error-pages/Page404'));

const routes = [
    // --------------------------- general  -----------------------
    {
        path: '/demoLogin',
        exact: true,
        layout: MainLayout,
        component: Home,
        isPrivate: true
    },
    {
        path: '/demoLogin/login',
        layout: Login,
        component: Login,
        isPrivate: false
    }

];

// ---------------------------- route 404 -----------------
routes.push({
    path: '*',
    layout: NotFound,
    component: NotFound,
    isPrivate: false
})

export default routes;