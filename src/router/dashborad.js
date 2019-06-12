
import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../components/jumpLoading/jumpLoading'

export default {
  key: 'group0',
  title: {
      icon: 'dashboard',
      text: '数据分析'
  },
  children: [
        {
            key: '1',
            text: '数据分析',
            path: '/dashboard/analyze',
            exact: true,
            component: Loadable({
                loader: () => import('../pages/dashboard/analyze'),
                loading: () => <Loading state />
            })
        },
        {
            key: '2',
            text: '数据监控',
            path: '/dashboard/monitor',
            exact: true,
            component: Loadable({
                loader: () => import('../pages/dashboard/monitor'),
                loading: () => <Loading state />
            })
        },
        {
            key: '3',
            text: '工作台',
            path: '/dashboard/workbench',
            exact: true,
            component: Loadable({
                loader: () => import('../pages/dashboard/workbench'),
                loading: () => <Loading state />
            })
        }
  ]
}