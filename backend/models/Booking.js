const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./User');
const Room = require('./Room');

const Booking = sequelize.define('Booking', {
  checkIn: { type: DataTypes.DATEONLY, allowNull: false },
  checkOut: { type: DataTypes.DATEONLY, allowNull: false },
});

Booking.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Booking.belongsTo(Room, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

User.hasMany(Booking);
Room.hasMany(Booking);

module.exports = Booking;
