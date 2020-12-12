const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html', (err) => {
    if (err) console.log(err)
  })
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + `${req.url}.html`, (err) => {
    if (err) console.log(err)
  })
})

app.get('/contact-me', (req, res) => {
  res.sendFile(__dirname + `${req.url}.html`, (err) => {
    if (err) console.log(err)
  })
})

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/404.html', (err) => {
    if (err) console.log(err)
  })
})

app.listen(8080)
