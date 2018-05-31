import axios from 'axios';
import Rx from 'rx';

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

export default  (url = '', data = {}, type = 'GET') => Rx.Observable.create(async (observer) => {
    try {
    type = type.toUpperCase();
    // url = baseUrl + url;
    let response = null;
        if (type === "POST") {
            let params = new URLSearchParams();
            Object.keys(data).forEach(key => {
                params.append(key, data[key])
            })
            response =await http.post(url, params);
            console.debug(response);
        } else if (type === "GET") {
            let dataStr = ''; //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&';
            })
            if (dataStr !== '') {
                dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr;
            }
            response =await http.get(url);
        } else {
            console.error("只支持POST与GET");
        }
        if(response.data.status===1){
            return observer.onNext(response.data);
        }else{
            if (response.data.status === 401) {
                localStorage.removeItem("token");
                window.location.replace(window.location.href);
            }
            return observer.onError(response.data.msg);
        }
    } catch (error) {
        return observer.onError("异常了");
    } finally {
        console.debug("触发了");
        return observer.onCompleted();
    }
});