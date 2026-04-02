const Hotel = require('../models/Hotel');
const Room = require('../models/Room');

exports.createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json(hotel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getHotels = async (_req, res) => {
  try {
    const hotels = await Hotel.findAll({ include: [Room] });
    res.json(hotels);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
