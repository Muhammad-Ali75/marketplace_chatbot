const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) =>
  res.status(200).json({
    sessionId: uuidv4(),
    message: 'Bot Server Active!',
  })
);

module.exports = router;
