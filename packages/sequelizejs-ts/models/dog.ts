import { Table, Column } from 'sequelize-typescript'
import Animal from './animal'

@Table({
  tableName: 'dog'
})
export default class Dog extends Animal {
  @Column
  leg: number

  /*
  // 子类中针对父类方法进行重写 - 获取返回值，然后修改为我们想要的类型
  static async getList() {
    // 调用父类方法，然后将返回值指定为某个类型
    const results = await super.getList()
    return results as Dog[]
  }
  */
}
