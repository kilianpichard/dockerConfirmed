const router = require('express').Router();
const messageController = require('../controllers/message.controller');

router.get('/', messageController.getAllMessages);
router.get('/random', messageController.getRandomMessage);
router.post('/', messageController.createMessage);

module.exports = router;
