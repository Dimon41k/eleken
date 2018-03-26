const Sequelize = require('sequelize');
const cfg = require("../config/cfg")

var sequelize = new Sequelize(cfg.db_name, null, null, {
    dialect: "sqlite",
    storage: cfg.path_to_db,
});
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });


//  MODELS
var UsersMessages = sequelize.define('UsersMessages', {
  name: Sequelize.STRING,
  message: Sequelize.STRING
});


//  SYNC SCHEMA
sequelize
  .sync({ force: false })
  .then(function(err) {
    console.log('It worked!');

  }, function (err) {
    console.log('An error occurred while creating the table:', err);
  });
  module.exports = { UsersMessages }

