import IconDashboard from "@material-ui/icons/Dashboard";
import IconApps from "@material-ui/icons/Apps";
import IconReceipt from "@material-ui/icons/ContentPaste";
import IconPerson from "@material-ui/icons/Person";

import Home from "views/Home/Home";
import ArticleList from "views/Articles/ArticleList";
import ArticlePulish from "views/Articles/ArticlePulish";
import ProjectList from "views/Projects/ProjectList";
import ProjectAdd from "views/Projects/ProjectAdd";
import UserList from "views/Users/UserList";
import UserAdd from "views/Users/UserAdd";


var dashRoutes = [
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
    {redirect: true, path: "/", pathTo: "/admin/home", name: "首页"}
]

export default dashRoutes;