const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Hotel = require('./Hotel');

const Room = sequelize.define('Room', {
  roomNumber: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.DECIMAL, allowNull: false },
  capacity: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.TEXT },
});

Room.belongsTo(Hotel, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Hotel.hasMany(Room);

module.exports = Room;
