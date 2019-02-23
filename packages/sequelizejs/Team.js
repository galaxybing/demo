module.exports = (sequelize, DataTypes) => {
  return sequelize.define('team', {
    teamName: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      unique: true
    },
  })
}
