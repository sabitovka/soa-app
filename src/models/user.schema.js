const { DataTypes } = require('sequelize');
const Schema = require('./schema.js');

module.exports = Schema('User', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});