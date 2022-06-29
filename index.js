//imports
const express = require('express')
//server
const app = express()
const server = app.listen( process.env.PORT ||5000, function () {
  console.log('server in port:', 5000)})

app.get('/',(req, res) => {
  res.send('hola')
})