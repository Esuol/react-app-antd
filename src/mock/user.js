import Mock, { Random } from 'mockjs'

const url = {
    login: 'http://antdReact.com/user/login',
    logout: 'http://antdReact.com/user/logout',
    register: 'http://antdReact.com/user/register'
}
export default [
    Mock.mock(url.login, {
        'data':{
            'status': "ok",
            "nickName": "berlin",
            "token": Random.guid()
        }
    }),
    Mock.mock(url.logout, {
        'data':{
            'status': "ok",
            "msg": "退出成功"
        }
    }),
    Mock.mock(url.register, {
        'data':{
            'status': "ok",
            "msg": "注册成功"
        }
    }),
]