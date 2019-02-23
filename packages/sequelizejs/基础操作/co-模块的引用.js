var fs = require("fs");
const co = require('co');
const { readFile } = fs;

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

var User = sequelize.define('demo_user', {
  'emp_id': {
    'type': Sequelize.CHAR(10), // 字段类型
    'allowNull': false,         // 是否允许为NULL
    'unique': true              // 字段是否UNIQUE
  },
})

var Account = sequelize.define('demo_account', {
  'email': {
    'type': Sequelize.CHAR(20),
    'allowNull': false,
  }
})


/*
CREATE TABLE IF NOT EXISTS `demo_users` (
  `id` INTEGER NOT NULL auto_increment ,
  `emp_id` CHAR(10) NOT NULL UNIQUE,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

??User的实例对象将拥有getAccount、setAccount、addAccount方法

*/
User.hasOne(Account);

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

Account的实例对象将拥有getUser、setUser、addUser方法

*/
Account.belongsTo(User) // 外键user_id 将会添加在了Account上。
                        // 另外，Sequelize还给生成了外键约束:
/*
 * 生成器函数
 *
function* initGenerator() {
  var user = yield User.create({'emp_id': '100153'});
  var account = user.createAccount({'email': 'wangyh@317hu.com'});

};
const g = initGenerator();
g.next();
*/

// co 模块，基于 ES6 的 generator 和 yield
//
// async es7
//
console.log('co......->', co);


// var account = user.createAccount({'email': 'a'})
// console.log(account.get({'plain': true}));

/* 在模型关系配置好了以后，才执行下面的映射操作： */
// User.sync({force: true})
// Account.sync({force: true})
