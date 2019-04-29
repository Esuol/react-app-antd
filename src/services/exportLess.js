import service from '../utils/request'

const exportLess = data => service.post('http://localhost:3040/exportLess', data)

export default exportLess