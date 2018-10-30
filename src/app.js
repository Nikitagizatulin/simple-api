require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
require('./routes')(app)

let { mongoose } = require('./models')
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  try {
    app.listen(process.env.PORT || '3000', () => {
      console.log(`API started on port: ${process.env.PORT || '3000'}`)
    })
  } catch (err) {
    console.log(`Server do not started because: ${err}`)
  }
})
