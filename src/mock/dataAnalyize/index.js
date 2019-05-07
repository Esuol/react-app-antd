import Mock, {Random} from 'mockjs'

const url = {
  saleData: 'http://antdReact.com/dataAnalyize/saleData'
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
    })
]