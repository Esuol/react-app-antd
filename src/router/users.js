import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../components/jumpLoading/jumpLoading'

export default [
    {
        key: '1',
        text: '登录',
        path: '/login',
        exact: true,
        component: Loadable({
            loader: () => import('../pages/users/login'),
            loading: () => <Loading state />
        })
    },
    {
        key: '2',
        text: '注册',
        path: '/register',
        exact: true,
        component: Loadable({
            loader: () => import('../pages/users/register'),
            loading: () => <Loading state />
        })
    }

    ]