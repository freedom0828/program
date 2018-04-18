import axios from 'axios'
import Vue from 'vue'
//创建一个新的实例
let instance = axios.create({
    headers: {
        plantform: 'PC', //判断设备
        //browser: 'google'
    },
    baseURL: 'http://localhost:9000'
});

//请求拦截
instance.interceptors.request.use((config) => {
    config.headers.token = localStorage.getItem('token') || ""
    return config
}),(err => {
    return Promise.reject(err)
})

//响应拦截
instance.interceptors.response.use((response)=>{
    if(response.status == 200) {
        return response.data
    }else{
        return Promise.reject({
            status:response.status
        })
    }
},(err) => {
    return Promise.reject(err)
})

//添加属性，第一个参数需要添加属性的对象，
//         第二个参数key值
//         第三个参数一个对象，对象中的参数 value 是key所对应的值，configurable : 是否可配置，当它为false的时候，1、上面三项的true和false值都不能改变了，2、对象本身也不能通过delete来删除3、数据属性和访问器属性也不能来回转化了，writable : 可修改（可写入），是否能修改value属性值,enumerable : 可枚举性，是否能通过for-in或者Object.keys来遍历

Object.defineProperty(Vue.prototype,'$http',{
    value:instance
})

export default instance

const login = (userInfo) => {
    return new Promise((resolve,reject) => {
        instance.post('/dsp-admin/user/login',userInfo).then(res=>{
            resolve(res)
        }).then(err=>{
             reject(err)
        })
    })
}

export {
    login
}