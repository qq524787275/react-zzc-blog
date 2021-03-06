import React from "react";

import IconDashboard from "@material-ui/icons/Dashboard";
import IconApps from "@material-ui/icons/Apps";
import IconReceipt from "@material-ui/icons/ContentPaste";
import IconPerson from "@material-ui/icons/Person";
import IconFavorite from "@material-ui/icons/Favorite";

const Home = React.lazy(() => import("views/Home/Home"));
const ArticleList = React.lazy(() => import("views/Articles/ArticleList"));
const ArticlePulish = React.lazy(() => import("views/Articles/ArticlePulish"));
const ProjectList = React.lazy(() => import("views/Projects/ProjectList"));
const ProjectAdd = React.lazy(() => import("views/Projects/ProjectAdd"));
const UserList = React.lazy(() => import("views/Users/UserList"));
const UserAdd = React.lazy(() => import("views/Users/UserAdd"));
const About = React.lazy(() => import("views/About/About"));

let dashRoutes = [
    {
        path: "/admin/home",
        name: "首页",
        icon: IconDashboard,
        component: Home
    },
    {
        collapse: true,
        path: "/admin/articles",
        name: "文章",
        state: "openArticles",
        icon: IconReceipt,
        views: [
            {
                path: "/admin/articles/article-list",
                name: "文章列表",
                // mini: "LB",
                component: ArticleList
            },
            {
                path: "/admin/articles/article-publish",
                name: "文章发布",
                component: ArticlePulish
            }
        ]
    },
    {
        collapse: true,
        path: "/admin/projects",
        name: "项目",
        state: "openProjects",
        icon: IconApps,
        views: [
            {
                path: "/admin/projects/project-list",
                name: "项目列表",
                component: ProjectList
            },
            {
                path: "/admin/projects/project-add",
                name: "添加项目",
                component: ProjectAdd
            }
        ]
    },
    {
        collapse: true,
        path: "/admin/users",
        name: "用户管理",
        state: "openUsers",
        icon: IconPerson,
        views: [
            {
                path: "/admin/users/user-list",
                name: "用户列表",
                component: UserList
            },
            {
                path: "/admin/users/user-add",
                name: "添加用户",
                component: UserAdd
            },
        ]
    },
    {
        path: "/admin/about",
        name: "关于",
        icon: IconFavorite,
        component: About
    },
    {redirect: true, path: "/", pathTo: "/admin/home", name: "首页"}
]

export default dashRoutes;
