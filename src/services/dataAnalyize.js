import service from '../utils/request'
import '../mock/dataAnalyize'

export default {
  getSaleData: data => service.post('/dataAnalyize/saleData', data),
  logout: () => service.get('/user/logout'),
}
