import request from '@/utils/request'

// GET请求示例
request.get('/api/user').then(response => {
  console.log(response)
})

// POST请求示例
request.post('/api/login', {username: 'admin', password: '123456'})