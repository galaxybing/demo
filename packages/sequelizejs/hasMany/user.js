const Sequelize = require("sequelize")

module.exports = sequelize => {
  const User = sequelize.define("demoUser", {
    empId: {
      type: Sequelize.STRING,
      allowNumm: false,
      unique: true
    }
  });

  return User;
}
