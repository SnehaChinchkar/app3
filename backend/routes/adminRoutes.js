const express = require('express');
const { adminDashboard, addMovie } = require('../controllers/adminController');
const { route } = require('./userRoutes');
const router = express.Router();

router.get('/dashboard', adminDashboard);
router.post('/add-movie', addMovie);
module.exports = router;
