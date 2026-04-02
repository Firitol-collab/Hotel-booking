const express = require('express');
const router = express.Router();
const { createHotel, getHotels } = require('../controllers/hotelController');
const { authenticateToken, requireRole } = require('../middleware/auth');

// Only admin can create hotels
router.post('/', authenticateToken, requireRole('admin'), createHotel);
router.get('/', getHotels);

module.exports = router;
