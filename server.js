const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

  // fs.readFile('index.html', 'utf8', (err, html) => {
  //   if (err) { console.log(err) }
  //   res.end(html)
  // })
  
  // switch (req.url) {
  //   case '/movies':
  //     res.end(`
  //     <div>
  //       <li>Goodfellas</li>
  //       <li>The Room</li>
  //       <li>movie three</li>
  //       <li>movie four</li>
  //       <li>movie five</li>
  //     </div>
  //     `)
  //     break
  //   case '/songs':
  //     res.end(`
  //     <div>
  //       <li>song one</li>
  //       <li>song two</li>
  //       <li>song three</li>
  //       <li>song four</li>
  //       <li>song five</li>
  //     </div>
  //     `)
  //     break
  //   case '/food':
  //     res.end(`
  //     <div>
  //       <li>food one</li>
  //       <li>food two</li>
  //       <li>food three</li>
  //       <li>food four</li>
  //       <li>food five</li>
  //     </div>
  //     `)
  //     break
  //   case '/games':
  //     res.end(`
  //     <div>
  //       <li>game one</li>
  //       <li>game two</li>
  //       <li>game three</li>
  //       <li>game four</li>
  //       <li>game five</li>
  //     </div>
  //     `)
  //     break
  // }

})

server.listen(3000, () => console.log('http://localhost:3000'))
