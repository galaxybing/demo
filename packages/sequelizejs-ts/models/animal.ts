import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'animal'
})
export default class Animal extends Model<Animal> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  name: string

  @Column
  weight: number

  static async getList<T extends Animal>() { // 1. 函数上边添加一个范型的定义，并且添加限制(约束)保证传入的范型类型一定是继承自Animal
    const results = await this.findAll({
      raw: true,
    })
    return results as T[] // 2. 返回值转换其类型为T
  }
}
