const Sequelize = require('sequelize');
const sequelize = new Sequelize('rap2_delos_app_local', 'fe', 'fe@100153', {
  host: '172.16.150.246',
  dialect: 'mysql',
  // port: 3306, // 如果指定的不是默认 mysql 端口号时，需要使用该配置参数；
  // password: null, // 如果密码为空时使用
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  // storage: 'path/to/database.sqlite'
});

// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


/*
const User = sequelize.define('demoUsers', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'wang',
    lastName: 'yh'
  });
});

User.findAll().then(users => {
  console.log(users)
  process.exit()
})
*/

sequelize.query("SELECT * FROM demoUsers").then(myTableRows => {
  console.log('galaxyw......->', myTableRows, ' myTableRows->', myTableRows.length)
})

