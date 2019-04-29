import service from '../utils/request'

const exportLess = data => service.post('http://localhost:8010/exportLess', data)

export default exportLess