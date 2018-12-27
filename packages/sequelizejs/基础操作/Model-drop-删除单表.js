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

var User = sequelize.define('demoUser', {
  'emp_id': {
    'type': Sequelize.CHAR(10), // 字段类型
    'allowNull': false,         // 是否允许为NULL
    'unique': true              // 字段是否UNIQUE
  },
})

var Account = sequelize.define('demoAccount', {
  'email': {
    'type': Sequelize.CHAR(20),
    'allowNull': false,
  }
})

User.hasOne(Account);

/*
CREATE TABLE IF NOT EXISTS `demoAccounts` (
    `id` INTEGER NOT NULL auto_increment ,
    `email` CHAR(20) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `user_id` INTEGER,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;
*/
Account.belongsTo(User) // 外键user_id 将会添加在了Account上。
                        // 另外，Sequelize还给生成了外键约束:
                        //    `user_id` INTEGER,
                        //    FOREIGN KEY (`demo_user_id`) REFERENCES `demoUsers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE

// var user = yield User.create({'emp_id': '1'})
// var account = user.createAccount({'email': 'a'})
// console.log(account.get({'plain': true}));

/* 在模型关系配置好了以后，才执行下面的映射操作： */
// User.sync({force: true})
// Account.sync({force: true})

User.drop(); // DROP TABLE IF EXISTS `demoUsers`;
// Account.drop()
