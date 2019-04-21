import React from 'react';

const Dashboard = React.lazy(() => import("../layouts/Dashboard.jsx"));
const Login = React.lazy(() => import("../layouts/Login"));
const Pages = React.lazy(() => import("../layouts/Pages"));
const ArticleDetail = React.lazy(() => import("../views/Pages/ArticleDetail"));

let indexRoutes = [
    {path: "/admin/login", name: "Login", component: Login},
    {path: "/admin", name: "Home", component: Dashboard},
    {path: "/article/detail/:id", name: "文章详情", component: ArticleDetail},
    {path: "/", name: "Index", component: Pages}
];

export default indexRoutes;
