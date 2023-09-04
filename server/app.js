const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const {MONGO_URI,SERVER_PORT} = process.env

console.log('MONGO_URI: ', MONGO_URI)

app.use(cors(
    {
        origin: 'http://localhost:3001',
    }
))

app.use(bodyParser.json())

//connect to local mongoDB
const mongoose = require('mongoose')
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.on('connected', () => {
    console.log('MongoDB connected!')
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const messageRouter = require('./routes/message.route')
app.use('/messages', messageRouter)

app.listen(SERVER_PORT, () => {
  console.log(`Docker Confirmed server running on port: ${SERVER_PORT}`)
})
