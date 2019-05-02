import React from 'react'
import Loadable from 'react-loadable'

export default [
    {
        key: '1',
        text: '登录',
        path: '/login',
        exact: true,
        component: Loadable({
            loader: () => import('../pages/users/login'),
            loading: () => <p>loading</p>
        })
    },
    {
        key: '2',
        text: '注册',
        path: '/register',
        exact: true,
        component: Loadable({
            loader: () => import('../pages/users/register'),
            loading: () => <p>loading</p>
        })
    }

    ]