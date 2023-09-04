const Message = require('../models/message')

const getAllMessages = async (req, res) => {
    const messages = await Message.find({})
    res.json(messages)
}

const createMessage = async (req, res) => {
    const message = new Message({
        message: req.body.message
    })
    await message.save()
    res.json(message)
}

const getRandomMessage = async (req, res) => {
    const messages = await Message.find({})
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    res.json(randomMessage)
}

module.exports = {
    getAllMessages,
    createMessage,
    getRandomMessage
}
