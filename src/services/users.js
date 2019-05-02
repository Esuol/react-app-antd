import service from '../utils/request'
import '../mock/user'

export default {
  login: () => service.get('/user/login')
}

