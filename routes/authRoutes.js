const express = require('express');
const router = express.Router();
const { register, login, verifyToken, getAuthUser, logout } = require('../controllers/authController');

// register user
router.post('/register', register);
// login user
router.post('/login', login);
// get auth user
router.get('/user', verifyToken, getAuthUser);
// logout user
router.get('/logout', verifyToken, logout);

module.exports = router;
