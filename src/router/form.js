import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../components/jumpLoading/jumpLoading'

export default{
  key: 'group2',
  title: {
      icon: 'ordered-list',
      text: '表单页'
  },
  children: [
      {
          key: '3',
          text: '基础表单',
          path: '/form/baseForm',
          exact: true,
          component: Loadable({
            loader: () => import('../pages/form/baseForm'),
            loading: () => <Loading state />
          })
      },
      {
          key: '4',
          text: '分步表单',
          path: '/form/stepForm',
          exact: true,
          component: Loadable({
            loader: () => import('../pages/form/stepForm'),
            loading: () => <Loading state />
          })
      },
      {
          key: '5',
          text: '高级表单',
          path: '/form/advancedForm',
          exact: true,
          component: Loadable({
            loader: () => import('../pages/form/advancedForm'),
            loading: () => <Loading state />
          })
      }
  ]
}