const Sequelize = require("sequelize")

module.exports = (sequelize) => {
  const Demo = 'hasMany 和 belongsTo 的关系操作方法演示';

  const User  = sequelize.import(__dirname + "/user")
  const Note = sequelize.import(__dirname + "/note")
  User.hasMany(Note); // 源（主）将获得 字段 设置
                      // 第一位模型(User)实例对象将获得操作方法:
                      //   get[Note模型定义名称]s、set[Note模型定义名称]s、add[Note模型定义名称]、create[Note模型定义名称]、remove[Note模型定义名称]、has[Note模型定义名称]

  Note.belongsTo(User); // 同上
                        // 第一个模型实例对象将拥有get[User模型定义名称]、set[User模型定义名称]、create[User模型定义名称] 方法

  return sequelize.sync({
    // force: true,
  })
  .then(async () => {
    console.log(`Database & tables created!`);
    // 模型方法
    const user = await User.create({ empId: '100157' });
    // 实例对象操作方法
    // ?? https://www.colabug.com/4897945.html
    // Unable to connect to the database: TypeError: user.createNote is not a function
    //
    // const note = await user.createDemoNote({ title: 'association modal-- learn demo hasMany Method' });
    const note = await Note.create({ title: 'association modal-- learn demo hasMany Method' });
    user.addDemoNote(note);
  })

  // return Demo;
}
