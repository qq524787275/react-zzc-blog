import Dashboard from "../layouts/Dashboard.jsx";
import Login from "../layouts/Login";
import Index from "../layouts/Pages";
var indexRoutes = [
    {path: "/admin/login", name: "Login", component: Login},
    {path: "/admin", name: "Home", component: Dashboard},
    {path:"/",name:"Index",component:Index},
];

export default indexRoutes;
