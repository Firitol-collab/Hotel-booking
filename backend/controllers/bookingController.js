const Booking = require('../models/Booking');
const Room = require('../models/Room');

exports.createBooking = async (req, res) => {
  try {
    const { roomId, checkIn, checkOut } = req.body;
    // Optionally check if the room is available here.
    const booking = await Booking.create({
      RoomId: roomId,
      UserId: req.user.id,
      checkIn,
      checkOut,
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { UserId: req.user.id },
      include: [Room],
    });
    res.json(bookings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
