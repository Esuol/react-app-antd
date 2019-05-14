import service from '../utils/request'
import '../mock/dataAnalyize'

export default {
  getSaleData: data => service.post('/dataAnalyize/saleData', data),
  getSVisitorData: data => service.get('/dataAnalyize/visitorData', data),
  searchList: data => service.get('/dataAnalyize/searchList', data),
  logout: () => service.get('/user/logout'),
  pieDataOne: data => service.get('/dataAnalyize/pieData/one', data),
  pieDataTwo: data => service.get('/dataAnalyize/pieData/two', data),
  pieDataThree: data => service.get('/dataAnalyize/pieData/three', data),
}
