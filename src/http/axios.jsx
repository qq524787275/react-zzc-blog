import axios from 'axios';

import {
    baseUrl
} from 'http/env'

const http = axios.create({
    baseURL: baseUrl,
    timeout: 3000,
    params: {
        token: localStorage.getItem("token")
    }
});

export default async (url = '', data = {}, type = 'GET') => {

    type = type.toUpperCase();
    // url = baseUrl + url;


    let response = null;

    try {
        if (type === "POST") {
            let params = new URLSearchParams();
            Object.keys(data).forEach(key => {
                params.append(key, data[key])
            })
            response = await http.post(url, params);
        } else if (type === "GET") {
            let dataStr = ''; //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&';
            })
            if (dataStr !== '') {
                dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr;
            }
            response = await http.get(url);
        } else {
            console.error("只支持POST与GET");
        }

        if (response.data.status === 401) {
            localStorage.removeItem("token");
            window.location.replace(window.location.href);
        }
        return response.data;
    } catch (error) {
        console.debug("异常了");
        console.error(error);
    }
}