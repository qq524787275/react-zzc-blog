import http from 'http/axios'

import {
    baseUrl
} from 'http/env'

//登录
export const login = (username, password) => http(baseUrl + '/api/admin/login', {
    username: username,
    password: password,
}, 'POST');

//添加用户
export const addUser = (username, password) => http(baseUrl + "/api/admin/add", {
    username: username,
    password: password
}, 'POST');

export const getUserList = (page, size) => http(baseUrl + "/api/admin/list", {
    page: page,
    size: size
}, "POST");

export const getArticleDetial = (id) => http(baseUrl + "/api/article/detail", {
    id: id,
}, "POST");

export const upDateArticle = (data) => http(baseUrl + "/api/article/update", {
    id: data.id,
    title: data.title,
    description: data.description,
    content: data.content,
}, "POST")

export const getArticleVisibleDetail = (id) => http(baseUrl + "/api/article/visibleDetail", {
    id: id,
}, "POST");

export const setArticleVisible = (id, visible) => http(baseUrl + "/api/article/visible", {
    id: id,
    visible: visible
}, "POST");

export const pushArticle = (title, description, content) => http(baseUrl + "/api/article/add", {
    title: title,
    description: description,
    content: content
}, "POST");

export const getArticleList = (page, size) => http(baseUrl + "/api/article/list", {
    page: page,
    size: size
}, "POST");

export const getArticleVisibelList = (page, size) => http(baseUrl + "/api/article/visibleList", {
    page: page,
    size: size
}, "POST");

export const projectList = (page, size) => http(baseUrl + "/api/project/list", {
    page: page,
    size: size
}, "GET");

export const guestbookList = (page, size) => http(baseUrl + "/api/guestbook/list", {
    page: page,
    size: size
}, "GET");

export const addGuestbook = (nickname, content) => http(baseUrl + "/api/guestbook/add", {
    nickname: nickname,
    content: content
}, "POST")

export const getAbout = () => http(baseUrl + "/api/about/getAbout", "", "GET")

export const updateAbout = (content) => http(baseUrl + "/api/about/update", {
    content: content,
}, "POST")

export const addProject = (title, description) => http(baseUrl + "/api/project/add", {
    title: title,
    description: description
}, "POST")

