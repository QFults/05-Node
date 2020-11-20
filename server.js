const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)

  if (req.url === '/greeting') {
    res.end('<h1>Hello World!</h1>')
  } else {
    res.end('404 Not Found')
  }

})

server.listen(3000, () => console.log('http://localhost:3000'))
