var fs = require("fs")

const Sequelize = require('sequelize');
const sequelize = new Sequelize('rap2_delos_app_local', 'fe', 'fe@100153', {
  host: '172.16.150.246',
  dialect: 'mysql',
  port: 3306,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    underscored: true, // created_at	updated_at | createdAt	updatedAt
  }
});

var User = sequelize.define('demouser', {
  'emp_id': {
    'type': Sequelize.CHAR(10), // 字段类型
    'allowNull': false,         // 是否允许为NULL
    'unique': true              // 字段是否UNIQUE
  },
  'nick': {
    'type': Sequelize.CHAR(10),
    'allowNull': false
  },
  'department': {
    'type': Sequelize.STRING(64),
    'allowNull': true
  }
})

User.sync({ force: true }).then(() => {
  process.exit(0) // 测试语句的退出命令
})
