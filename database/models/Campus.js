const Sequelize = require("sequelize");
const db = require("../db");

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://s29068.pcdn.co/wp-content/uploads/hunter-campus.jpg",
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Campus;
