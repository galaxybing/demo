/*
参考： https://www.colabug.com/4897945.html
*/

const Sequelize = require("sequelize")
const { like, lt } = Sequelize.Op // 查询操作的 Operator symbols - http://docs.sequelizejs.com/variable/index.html#static-variable-Op

module.exports = (sequelize) => {
  const Demo = 'hasMany 和 belongsTo 的关系操作方法演示';

  const User  = sequelize.import(__dirname + "/user")
  const Note = sequelize.import(__dirname + "/note")
  User.hasMany(Note, {as: 'note', foreignKey: 'userId'});
  // 源（主）将获得 字段 设置
  // 第一位模型(User)实例对象将获得操作方法:
  //   get[Note模型定义名称]s、set[Note模型定义名称]s??、add[Note模型定义名称]、create[Note模型定义名称]、remove[Note模型定义名称]、has[Note模型定义名称]

  Note.belongsTo(User, {as: 'user'});
  // 第一个模型实例对象将拥有get[User模型定义名称]、set[User模型定义名称]、create[User模型定义名称] 方法

  return sequelize.sync({
    // force: true,
  })
  .then(async () => {
    console.log(`Database & tables created!`);

    // 实例对象操作方法
    // ?? https://www.colabug.com/4897945.html
    // Unable to connect to the database: TypeError: user.createNote is not a function,确认定关系模型间的 as 属性是否定义，且模型名称的真正名称；

    /*
     * 新增
    */
    // const user = await User.create({ empId: '100158' });
    // await user.createNote({ title: 'association modal-- learn demo hasMany Method' });
      // const note = await Note.create({ title: 'association modal-- learn demo hasMany Method' });
      // user.addDemoNote(note);

    /*
     * 修改： setNotes 操作方法的执行流程
     * 1. 查询 userId 为 1 的用户的所有 note 记录
     * 2. 将 note1、note2 记录的外键 userId 的值置为 NULL，切断之间的关系
     * 3. 将 note3、note4 记录的外键 userId 的值置为当前用户的 id，完成关系的建立
     */
    /* setNote，不应该带有 *s 形式 */
    // const user = await User.create({ empId: '1' });
    // const note1 = await user.createNote({ title: 'learn node.js' });
    // const note2 = await user.createNote({ title: 'learn rx.js' });
    // const note3 = await Note.create({ title: 'learn angular.js' });
    // const note4 = await Note.create({ title: 'learn typescript.js' });
    // await user.setNote([note3, note4]);

    /* 查询出来，然后进行修改 */
    // return User.findOne({
    //   where: { empId: '1' }
    // }).then(async (task) => {
    //   const note3 = await Note.create({ title: 'learn angular.js - 2' });
    //   const note4 = await Note.create({ title: 'learn typescript.js - 2' });
    //   await task.setNote([note3, note4]);
    // })
    // .catch(err => {
    //   console.error('err: ', err);
    // })


    /*
     * 删除，即设置关联关系中的 userId 列字段为  null
    */
    /* 删除当前用户下所关联的所有 note 记录，若需要删除指定 note 记录，则可以调用 user.removeNote 方法。 */
    // return User.findOne({
    //   where: { empId: '1' }
    // }).then(async (task) => {
    //   await task.setNote([]);
    // })
    // .catch(err => {
    //   console.error('err: ', err);
    // })

    /* 删除 从表中指定记录的关系 removeNote */
    // return User.findOne({
    //   where: { empId: '1' }
    // }).then(async (task) => {
    //   const noteTask = await Note.findOne({
    //     where: {
    //       title: 'learn angular.js'
    //     }
    //   });
    //   await task.removeNote(noteTask);
    // })
    // .catch(err => {
    //   console.error('err: ', err);
    // })

    /*
     * 查询
    */
    /* 按主键查询 */
    // const user = await User.findByPk(2); // 这里的 id 指的是主键
    // const notes = await user.getNote({ // (2)
    //     where: {
    //       title: {
    //         [like]: '%association%'
    //       }
    //     }
    //   });
    //   console.log(`User ${user.id}: has ${notes.length} notes`)
    // })

    /* 查询所有满足条件的 user，同时获取该 user 所有满足条件的 note */
    // const users = await User.findAll({
    //   include: ['note'], // [Note],
    //   where: {
    //     createdAt: {
    //       [lt]: new Date()
    //     }
    //   }
    // });
    // console.log(`Has found ${users.length} users`);

    /* 模型过滤条件?? */
    const users = await User.findAll({
      include: [
        {
          model: Note, // 这里使用了别名，如果 [demoNote],
          as: 'note',
          where: {
            title: {
              [like]: '%association%'
            }
          }
        }
      ],
      where: {
        createdAt: {
          [lt]: new Date()
        }
      }
    });
    console.log(`Has found ${users.length} users`);

  })
  // return Demo;
}
