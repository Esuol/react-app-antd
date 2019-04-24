export const sidebarData = [
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
  }
];

export const groupKey = sidebarData.map(item => item.key);
