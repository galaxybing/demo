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
  // define: {
  //   underscored: true, // created_at	updated_at | createdAt	updatedAt
  // }
});

/* 在模型关系配置好了以后，才执行下面的映射操作： */
// User.drop()
// Account.drop()

// User.sync({force: true})
// Account.sync({force: true})

/*
// co 模块，基于 ES6 的 generator 和 yield
//
// async es7
//

co(function* () {
  const Player = sequelize.import(__dirname + "/Player")
  // const Team = sequelize.import(__dirname + "/Team")

  const memberId = 73
  // Player.sync();
  return Player.create({
    memberId
  })
}).then(function (value) {
  //
  console.log('value->', value);
}, function (err) {
  console.error(err.stack);
});

*/

async function demoHandler() {
  const Team = sequelize.import(__dirname + "/Team")
  const teamName = '我的团队名称'
  await Team.sync();
  return Team.create({
    teamName
  }).catch(err => console.error(err))
}

demoHandler()
