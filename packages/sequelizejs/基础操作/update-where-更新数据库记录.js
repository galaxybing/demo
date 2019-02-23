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

// 插入 数据记录
/*
User.build({ // build 需要配置 save 使用
  emp_id: '100153',
  nick: 'galaxyw',
}).save().then((task) => {
  console.log('task->', task)
}).catch(error => {
  // 异常
})

// While an instance created with .build() requires an explicit .save() call to be stored in the database, .create() omits that requirement altogether and automatically stores your instance's data once called.
//
User.create({ // 直接创建
  emp_id: '100155',
  nick: 'bing',
  department: 'nursetrain'
}).then((task) => {
  // task.destroy({ force: true })
}).catch(error => {
  console.log('error->', error)
  // 异常
})
*/


// 更新数据
// const userBuildData = User.build({ emp_id: '100156', nick: 'train'})
// userBuildData.save({fields: ['emp_id', 'nick']}).then(() => {
//   //
// })
User.update({
  emp_id: '100156',
  nick: 'nurse',
  department: '前端架构组'
},  {// ?? AssertionError [ERR_ASSERTION]: Missing where attribute in the options parameter
  where: { emp_id: '100156' }
}).then((task) => {
  //
}).catch(error => {
  console.log('error->', error)
  // 异常
})



/*
 * 批量 删除数据
// User.sync({force: true});
User.bulkCreate([
  {emp_id: '100153', nick: 'galaxyw', department: 'fe'},
  {emp_id: '100923', nick: 'finished', department: 'nursetrain'},
  {emp_id: '900890', nick: 'finished', department: 'changpin'}
]).then(() => {
  return User.destroy({
    where: {
      nick: 'finished'
    },
    truncate: true // this will ignore where and truncate the table instead
  });
}).then(affectedRows => {
  // affectedRows will be 2
  return User.findAll();
}).then(tasks => {
  console.log(tasks) // no programming, just reading :(
})
*/
