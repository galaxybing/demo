// const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('demo_account', {
    email: {
      // type: Sequelize.CHAR(20),
      type: DataTypes.CHAR(20),
      allowNull: false,
    }
  })
}

/*
CREATE TABLE IF NOT EXISTS `demo_accounts` (
  `id` INTEGER NOT NULL auto_increment ,
  `email` CHAR(20) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `demo_user_id` INTEGER,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`demo_user_id`) REFERENCES `demo_users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;
*/
