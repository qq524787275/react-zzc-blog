import Index from "views/Pages/Index";
// @material-ui/icons
import Home from "@material-ui/icons/Home";
import IconApps from "@material-ui/icons/Apps";
import IconReceipt from "@material-ui/icons/ContentPaste";
import IconPerson from "@material-ui/icons/Person";
import IconLanguage from "@material-ui/icons/Language";
import Favorite from "@material-ui/icons/Favorite";
import React from "react";

const Article = React.lazy(() => import("views/Pages/Article"));
const Person = React.lazy(() => import("views/Pages/Person"));
const Project = React.lazy(() => import("views/Pages/Project"));
const Guestbook = React.lazy(() => import("views/Pages/Guestbook"));
const About = React.lazy(() => import("views/Pages/About"));



const pagesRoutes = [
    // {
    //     path: "/index",
    //     name: "Index Page",
    //     short: "首页",
    //     mini: "RP",
    //     icon: Home,
    //     component: Index
    // },
    {
        path: "/index",
        name: "Article Page",
        short: "文章",
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
        path: "/about",
        name: "About Page",
        short: "关于",
        mini: "RP",
        icon: Favorite,
        component: About
    },
    {
        redirect: true,
        path: "/",
        pathTo: "/index",
        name: "首页",
    }
];

export default pagesRoutes;
