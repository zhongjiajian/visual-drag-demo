import axios from 'axios'
import { baseUrl } from '../config'
import store from '@/store'
import toast from '@/utils/toast'

// Add a request interceptor
axios.interceptors.request.use((config) => {
    // Do something before request is sent
    config.headers.authorization = 'Bearer ' + store.state.userInfo.token
    return config
}, (error) => {
    // Do something with request error
    toast('请求错误，请重新尝试')
    return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(null, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.message === 'Request failed with status code 401') {
        store.commit('logout')
        toast('请登录', 'warning')
    }
    if (error.message === 'Request failed with status code 500') {
        toast('服务器异常')
    }
    return Promise.reject(error)
})

// 获取图形验证码
export function getCaptcha(sid) {
    return axios({
        method: 'get',
        url: baseUrl + '/public/getCaptcha',
        params: {
            sid,
        },
    })
}

// 登录
export function login(params) {
    return axios({
        method: 'post',
        url: baseUrl + '/login/login',
        data: params,
    })
}

// 获取页面列表
export function getPages(params) {
    return axios({
        method: 'post',
        url: baseUrl + '/public/getPages',
        data: params,
    })
}

// 新建页面
export function addPage(params) {
    return axios({
        method: 'post',
        url: baseUrl + '/page/addPage',
        data: params,
    })
}

// 删除页面
export function deletePage(params) {
    return axios({
        method: 'post',
        url: baseUrl + '/page/deletePage',
        data: params,
    })
}

// 删除页面
export function updatePage(params) {
    return axios({
        method: 'post',
        url: baseUrl + '/page/updatePage',
        data: params,
    })
}

// 获取页面信息
export function getPageInfo(id) {
    return axios({
        method: 'post',
        url: baseUrl + '/public/getPageInfo',
        data: { id },
    })
}