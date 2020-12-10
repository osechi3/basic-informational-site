const http = require('http')
const fs = require('fs')

const page404 = fs.readFileSync('404.html', 'utf8', (err, data) => {
  if (err) throw err
  return data
})

http.createServer((req, res) => {
  const filePath = req.url === '/' ? 'index.html' :'.' + req.url

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.write(page404)
      return res.end()
    }

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    return res.end()
  })
}).listen(8080)
