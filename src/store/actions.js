import {login} from '../utils/request'

let actions = {
    saveToken({commit}, payload) {
        login(payload.ruleform).then(data => {
            if (data.success == 1) {
                commit('getToken', data.token);
                commit('getUser',data.user.name)
                window .localStorage.setItem('token', data.token);
                window .localStorage.setItem('info', data.user.name);
                payload.router.push('/index/home');
                payload.message({
                    message: '登录成功',
                    type: 'success',
                    duration:2000
                });
            }else{
                payload.message({
                    message: '用户名或密码错误',
                    type: 'warning',
                    duration:2000
                });
            }
        })
    }
}

export default actions