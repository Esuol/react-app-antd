import Mock, { Random } from 'mockjs'

const url = {
    tableDataOne: 'http://antdReact.com/user/login',
}
export default [
    Mock.mock(url.tableDataOne, {
        'data':{
            'status': "ok",
            "nickName": "berlin",
            "token": Random.guid()
        }
    })
]