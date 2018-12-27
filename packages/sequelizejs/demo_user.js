// const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('demo_user', {
    emp_id: {
      // type: Sequelize.CHAR(10), // 字段类型
      type: DataTypes.CHAR(10),
      allowNull: false,         // 是否允许为NULL
      unique: true              // 字段是否UNIQUE
    },
  })
}

/*
CREATE TABLE IF NOT EXISTS `demo_users` (
  `id` INTEGER NOT NULL auto_increment ,
  `emp_id` CHAR(10) NOT NULL UNIQUE,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;
*/
