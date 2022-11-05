const express = require('express')
const app = express()
const router = require('../src/router/router')

app.use(express.json())

//routes
app.use(router);

app.listen(8080, (req, res) => {
  console.log('Servidor rodando!')
})