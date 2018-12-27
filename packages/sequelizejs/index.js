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

sequelize.authenticate().then(async () => {
  console.log('Connection has been established successfully.')
  // require('./model/user')(sequelize)
  // sequelize.import(__dirname + "/Team") ，将同时传入两个参数（sequelize, DataTypes）

  /* 在模型关系配置好了以后，才执行下面的映射操作： */

  /* 删除,清理数据库 */
  // const DemoModelDeleted = sequelize.define('test_create_demo_index', {
  //   memberId: {
  //     type: Sequelize.INTEGER,
  //     allowNull: false,
  //     unique: true
  //   },
  // });
  // await DemoModelDeleted.drop()
  // await DemoModelDeleted.sync({force: true})


  /* 执行演示模块 */
  await require('./hasMany')(sequelize)

  process.exit(0)
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
