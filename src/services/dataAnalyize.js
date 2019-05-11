import service from '../utils/request'
import '../mock/dataAnalyize'

export default {
  getSaleData: data => service.post('/dataAnalyize/saleData', data),
  getSVisitorData: data => service.get('/dataAnalyize/visitorData', data),
  logout: () => service.get('/user/logout'),
}
