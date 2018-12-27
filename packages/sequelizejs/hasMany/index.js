const Sequelize = require("sequelize")

module.exports = (sequelize) => {
  const Demo = 'hasMany 和 belongsTo 的关系操作方法演示';

  const User  = sequelize.import(__dirname + "/user")
  const Note = sequelize.import(__dirname + "/note")
  User.hasMany(Note); // 源（主）将获得 字段 设置，第一位的模型(User，一下行为: Note)实例对象将获得操作方法
  Note.belongsTo(User); // 同上

  return sequelize.sync({
    // force: true,
  })
  .then(async () => {
    console.log(`Database & tables created!`);
    //
    // const user = await User.create({ empId: '100153' });
    // const note = await user.createNote({ title: 'association modal-- learn demo hasMany Method' });

  })

  // return Demo;
}
