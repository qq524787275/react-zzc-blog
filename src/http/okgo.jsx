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