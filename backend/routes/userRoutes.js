const express = require('express');
const { getUserProfile, getMovie, getSpecificMovie } = require('../controllers/userController');

const router = express.Router();

router.get('/profile', getUserProfile);
router.get("/movies",getMovie);
router.get("/movies/:id",getSpecificMovie);
module.exports = router;
