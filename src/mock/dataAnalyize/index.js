import Mock, {Random} from 'mockjs'

const url = {
  saleData: 'http://antdReact.com/dataAnalyize/saleData',
  visitorData: 'http://antdReact.com/dataAnalyize/visitorData'
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
              "year": '@DATETIME("yyyy-mm-dd")',
              "y|60-100": 60
            }
          ]
      },
  })
]