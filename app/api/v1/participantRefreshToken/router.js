const express = require('express');
const router = express();
const { index } = require('./controller');

router.get('/participant-refresh-token/:refreshToken/:email', index);

module.exports = router;
