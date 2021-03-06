const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  totalDays: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  checkOut: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
});


module.exports = Order;
