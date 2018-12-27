const Sequelize = require("sequelize")

module.exports = sequelize => {
  const Note = sequelize.define("demoNote", {
    title: {
      type: Sequelize.CHAR(64),
      allowNumm: false
    }
  })

  return Note;
}
