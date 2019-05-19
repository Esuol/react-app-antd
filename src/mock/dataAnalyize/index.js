import Mock, {Random} from 'mockjs'

const url = {
  saleData: 'http://antdReact.com/dataAnalyize/saleData',
  visitorData: 'http://antdReact.com/dataAnalyize/visitorData',
  searchList: 'http://antdReact.com/dataAnalyize/searchList',
  pieDataOne: 'http://antdReact.com/dataAnalyize/pieData/one',
  pieDataTwo: 'http://antdReact.com/dataAnalyize/pieData/two',
  pieDataThree: 'http://antdReact.com/dataAnalyize/pieData/three',
  pieDataSmall: 'http://antdReact.com/dataAnalyize/pieDataSmall',
  offlineData: 'http://antdReact.com/dataAnalyize/offlineData',
  timeLineData: 'http://antdReact.com/dataAnalyize/timeLineData'
}
export default [
    Mock.mock(url.saleData, {
        'data':{
            'status': "ok",
            "payload|8": [
              {
                "x|+1": Random.range(1951, 1959),
                "y|+1": Random.range(30, 70, 15)
              }
            ]
        },
    }),
    Mock.mock(url.visitorData, {
      'data':{
          'status': "ok",
          "payload|20": [
            {
              "x": '@DATETIME("yyyy")',
              "y|60-100": 60
            }
          ]
      },
  }),
  Mock.mock(url.searchList, {
    'data':{
        'status': "ok",
        "payload|50": [
          {
            "index|+1": 1,
            "keyword|+1": Random.csentence(8),
            "count|200-500": 200,
            "range|1-100": 1,
            "status|0-1": 0
          }
        ]
    },
}),
Mock.mock(url.pieDataOne, {
  'data':{
      'status': "ok",
      "payload|5": [
        {
          "count|+1":Random.range(10, 100, 5),
          "item|+1": [Random.ctitle(3)
          ,Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3)]
        }
      ]
  },
}),
Mock.mock(url.pieDataTwo, {
  'data':{
      'status': "ok",
      "payload|5": [
        {
          "count|+1":Random.range(4, 100, 8),
          "item|+1": [Random.ctitle(3)
          ,Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3)]
        }
      ]
  },
}),
Mock.mock(url.pieDataThree, {
  'data':{
      'status': "ok",
      "payload|5": [
        {
          "count|+1":Random.range(2, 100, 9),
          "item|+1": [Random.ctitle(3)
          ,Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3)]
        }
      ]
  },
}),
Mock.mock(url.pieDataSmall, {
  'data':{
      'status': "ok",
      "payload|2": [
        {
          "count|+1":Random.range(40, 100, 20),
          "item|+1": [Random.ctitle(3)
          ,Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3)]
        }
      ]
  },
}),
Mock.mock(url.offlineData, {
  'data':{
      'status': "ok",
      "payload|10": [
        {
          "cvr|+1":Random.range(10, 100, 5),
          "name|+1": [Random.ctitle(3)
          ,Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3),Random.ctitle(3)]
        }
      ]
  },
}),
Mock.mock(url.timeLineData, {
  'data':{
      'status': "ok",
      "payload|30": [
        {
          "year": '@DATETIME("yyyy")',
          "value|200-500": 200,
          "country|+1": [Random.word(5)
          ,Random.word(5),Random.word(5),Random.word(5),Random.word(5),Random.word(5),Random.word(5),Random.word(5),Random.word(5),Random.word(5),Random.word(5),Random.word(5)]
        }
      ]
  },
})
]