module.exports = (sequelize, DataTypes) => {
  return sequelize.define('player', {
    memberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
  })
}
