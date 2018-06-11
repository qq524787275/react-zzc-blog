import Dashboard from "../layouts/Dashboard.jsx";
import Login from "../layouts/Login";
import Pages from "../layouts/Pages";
import ArticleDetail from "../views/Pages/ArticleDetail";
var indexRoutes = [
    {path: "/admin/login", name: "Login", component: Login},
    {path: "/admin", name: "Home", component: Dashboard},
    {path:"/article/detail/:id",name:"文章详情",component:ArticleDetail},
    {path:"/",name:"Index",component:Pages}
];

export default indexRoutes;
