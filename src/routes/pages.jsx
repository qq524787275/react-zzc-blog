import Index from "views/Pages/Index";

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";

const pagesRoutes = [
    {
        path: "/index",
        name: "Register Page",
        short: "Register",
        mini: "RP",
        icon: PersonAdd,
        component: Index
    },
    {
        redirect: true,
        path: "/",
        pathTo: "/index",
        name: "首页"
    }
];

export default pagesRoutes;
