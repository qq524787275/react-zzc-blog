import http from 'http/axios'

import {
    baseUrl
} from 'http/env'


export const login = (username, password) => http(baseUrl + '/api/admin/login', {
    username: username,
    password: password,
}, 'POST');

export const addUser = (username, password) => http(baseUrl + "/api/admin/add", {
    username: username,
    password: password
}, 'POST');

export const getUserList=(page,size)=> http(baseUrl+"/api/admin/list",{
    page:page,
    size:size
},"POST");

export const pushArticle=(title,content)=>http(baseUrl+"/api/article/add",{
    title:title,
    content:content
},"POST");

export const projectList=(page,size)=>http(baseUrl+"/api/project/list",{
    page:page,
    size:size
},"GET");