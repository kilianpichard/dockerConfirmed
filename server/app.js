const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const {MONGO_URI,SERVER_PORT, NODE_ENV} = process.env

const morgan = require("morgan");
const logger = require("./logger");


app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

app.use(cors(
    {
        origins: [
            'http://localhost:3000',
            'http://localhost:80',
        ]
    }
))

app.use(bodyParser.json())

//connect to local mongoDB
const mongoose = require('mongoose')
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.on('connected', () => {
    console.log('MongoDB connected')
});

app.get('/', (req, res) => {
  res.send(`Hello World! You are in ${NODE_ENV} env`)
})

const messageRouter = require('./routes/message.route')
app.use('/messages', messageRouter)

app.listen(SERVER_PORT, () => {
  console.log(`Docker Confirmed server running on port: ${SERVER_PORT}`)
})
