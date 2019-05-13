import Mock, {Random} from 'mockjs'

const url = {
  saleData: 'http://antdReact.com/dataAnalyize/saleData',
  visitorData: 'http://antdReact.com/dataAnalyize/visitorData',
  searchList: 'http://antdReact.com/dataAnalyize/searchList'
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
              "year": '@DATETIME("yyyy")',
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
})
]