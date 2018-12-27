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
});

const Bar = sequelize.define('bar', { /* bla */ }, {
  // 不添加时间戳属性 (updatedAt, createdAt)
  timestamps: false,

  // 不删除数据库条目，但将新添加的属性deletedAt设置为当前日期（删除完成时）。 
  // paranoid 只有在启用时间戳时才能工作
  // paranoid: true,

  // 将自动设置所有属性的字段选项为下划线命名方式。
  // 不会覆盖已经定义的字段选项
  underscored: true,

  // 禁用修改表名; 默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数。 如果你不想这样，请设置以下内容
  freezeTableName: true,

  // 定义表的名称
  tableName: 'galaxyw_very_custom_table_name',

  // 启用乐观锁定。 启用时，sequelize将向模型添加版本计数属性，
  // 并在保存过时的实例时引发OptimisticLockingError错误。
  // 设置为true或具有要用于启用的属性名称的字符串。
  version: true
});

Bar.sync().then(function(bar) {
  console.log('bar->', bar)
})

