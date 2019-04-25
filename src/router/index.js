const sidebarData = [
  {
      key: 'group0',
      title: {
          icon: 'dashboard',
          text: '数据分析'
      },
      children: [
          {
              key: '1',
              text: '数据监控',
              path: '/dashboard/monitor',
              component: 'Monitor'
          },
          {
              key: '2',
              text: '数据分析',
              path: '/dashboard/analyze',
              component: 'Analyze'
          }
      ]
  },
  {
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
            component: 'Monitor'
        },
        {
            key: '4',
            text: '分步表单',
            path: '/form/stepForm',
            component: 'Analyze'
        },
        {
            key: '5',
            text: '高级表单',
            path: '/form/advancedForm',
            component: 'Analyze'
        }
    ]
}
];

export default sidebarData
