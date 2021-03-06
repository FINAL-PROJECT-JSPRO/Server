if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)
app.use(errorHandler)

module.exports = app