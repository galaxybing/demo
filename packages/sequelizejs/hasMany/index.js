const Sequelize = require("sequelize")

module.exports = (sequelize) => {
  const Demo = 'hasMany 和 belongsTo 的关系操作方法演示';

  const User  = sequelize.import(__dirname + "/user")
  const Note = sequelize.import(__dirname + "/note")
  User.hasMany(Note, {as: 'note'}); // 源（主）将获得 字段 设置
                      // 第一位模型(User)实例对象将获得操作方法:
                      //   get[Note模型定义名称]s、set[Note模型定义名称]s、add[Note模型定义名称]、create[Note模型定义名称]、remove[Note模型定义名称]、has[Note模型定义名称]

  Note.belongsTo(User, {as: 'user'}); // 同上
                        // 第一个模型实例对象将拥有get[User模型定义名称]、set[User模型定义名称]、create[User模型定义名称] 方法

  return sequelize.sync({
    // force: true,
  })
  .then(async () => {
    console.log(`Database & tables created!`);

    // 实例对象操作方法
    // ?? https://www.colabug.com/4897945.html
    // Unable to connect to the database: TypeError: user.createNote is not a function,确认定关系模型间的 as 属性是否定义，且模型名称的真正名称；

    /* 新增 */
    const user = await User.create({ empId: '100158' });
    const note = await user.createNote({ title: 'association modal-- learn demo hasMany Method' });
    // const note = await Note.create({ title: 'association modal-- learn demo hasMany Method' });
    // user.addDemoNote(note);

    /* 修改 */
    // const user = await User.create({ empId: '1' });

  })

  // return Demo;
}
