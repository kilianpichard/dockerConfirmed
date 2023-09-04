const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors(
    {
        origin: 'http://localhost:3001',
    }
))

//connect to local mongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb://mongo:27017/docker-confirmed', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.on('connected', () => {
    console.log('MongoDB connected!')
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Docker Confirmed server running on port: ${port}`)
})
