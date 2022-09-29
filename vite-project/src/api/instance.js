import axios from 'axios'
import {
    messageBox
}from '@/message/message'
import {
    getToken,
}from 'api/tokenAction'

const instance = axios.create({
    baseURL: '/api/',
    timeout: 2000,
});

// interceptorsを追加する
instance.interceptors.request.use(function (config) {
    let token = getToken()
    if(token){
        config.headers['token'] = token
        // console.log(config)
    }
    // 請求する前、何をする
    return config;
}, function (error) {
    // 請求失敗した場合、何をする
    messageBox('error')
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 正確的な回復が得る場合
    return response;
}, function (error) {
    // 問題のある回復が得る場合
    messageBox('error')
    console.log('回復エラ',error.message)
    return Promise.reject(error);
});

export default instance