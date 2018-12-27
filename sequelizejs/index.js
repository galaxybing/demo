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

async function demoHandler() {
  const Team = sequelize.import(__dirname + "/Team")
  const teamName = '名称-10个字符以内'
  // await Team.sync();
  return Team.create({
    teamName
  }).catch(err => console.error(err))
}

demoHandler()
