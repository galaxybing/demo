/* eslint-disable import/no-extraneous-dependencies,no-new */

import * as path from 'path'
import { Sequelize } from 'sequelize-typescript'
import Animal from './models/animal'
import Dog from './models/dog'
import Bird from './models/bird'
// , Dog, Bird

/*
const passwd = 'fe@100153'
const sequelize = new Sequelize(`mysql://fe:${passwd}@172.16.150.246:3306/rap2_delos_app_local`)
// dialect://username:password@host:port/db_name
// sequelize.addModels([path.resolve(__dirname, `./models/`)]);
*/

const db = new Sequelize({
  host: '172.16.150.246',
  port: 3306,
  dialect: 'mysql',
  operatorsAliases: true, // 是否识别字段别名中的下划线
  database: 'rap2_delos_app_local',
  username: 'fe',
  password: 'fe@100153',
  /*
  define: {
    timestamps: true, // 开启时间戳 字段： createdAt deleteAt updateAt
    paranoid: true, // 开启假删除
    underscored: true, // 下划线
    charset: 'utf8',
    freezeTableName: true // 固定表名为单数，默认表名是复数形式: *s
  },
  */
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00', // 大陆时区设置
  // modelPaths: [__dirname + '/models']
});
// db.addModels([Animal, Dog, Bird]);
// db.addModels([path.resolve(__dirname, `./models/`)]);

(async () => {
  try {
    await db.addModels([path.resolve(__dirname, `./models/`)]);
    db.sync().then(() => {
      /*
      const animalList = await Animal.getList()
      const dogList = await Dog.getList<Dog>()

      console.log(animalList)
      console.log(dogList)
      */

      // [ts] 类型“Animal”上不存在属性“leg”。
      // console.log(dogList[0].leg)

      const animal = Animal.create<Animal>({
        name: 'Monkey',
        weight: 19,
      });

      process.exit(0)
    })
    
  } catch (e) {
    console.error(e)
  }
})()
