const express = require('express');
const { verifyToken } = require('../controllers/authController');
const router = express.Router();

router.get('/posts', verifyToken, (req, res) => {
  res.json([
    {
      title: 'My first post',
      description: 'Random data you should not access',
    },
    {
      title: 'My second post',
      description: 'Random data you should not access',
    },
  ])
});

module.exports = router;