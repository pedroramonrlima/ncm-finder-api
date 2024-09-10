const express = require('express');
const ncmController = require('../controllers/ncmController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/buscar-ncm', authMiddleware.verifyToken, ncmController.getNCM);

module.exports = router;
