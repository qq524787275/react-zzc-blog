import Index from "views/Pages/Index";
import Article from "views/Pages/Article";
import Person from "views/Pages/Person";
import Project from "views/Pages/Project";
import Guestbook from "views/Pages/Guestbook";
// @material-ui/icons
import Home from "@material-ui/icons/Home";
import IconApps from "@material-ui/icons/Apps";
import IconReceipt from "@material-ui/icons/ContentPaste";
import IconPerson from "@material-ui/icons/Person";
import IconLanguage from "@material-ui/icons/Language";

const pagesRoutes = [
    {
        path: "/index",
        name: "Index Page",
        short: "首页",
        mini: "RP",
        icon: Home,
        component: Index
    },
    {
        path: "/article",
        name: "Article Page",
        short: "推文",
        mini: "RP",
        icon: IconReceipt,
        component: Article
    },
    {
        path: "/project",
        name: "Project Page",
        short: "项目",
        mini: "RP",
        icon: IconApps,
        component: Project
    },
    {
        path: "/person",
        name: "Person Page",
        short: "个人",
        mini: "RP",
        icon: IconPerson,
        component: Person
    },
    {
        path: "/guestbook",
        name: "Person Page",
        short: "留言板",
        mini: "RP",
        icon: IconLanguage,
        component: Guestbook
    },
    {
        redirect: true,
        path: "/",
        pathTo: "/index",
        name: "首页"
    }
];

export default pagesRoutes;
