参考来源 - 2018年10月06日 - https://blog.csdn.net/w178191520/article/details/82954091

- sequelize-typescript - https://github.com/RobinBuschmann/sequelize-typescript

**Sequelize-typescript是基于Sequelize针对TypeScript所实现的一个增强版本，抛弃了之前繁琐的模型定义，使用装饰器直接达到我们想到的目的。**
- 基于Sequelizejs
- 实例化Sequelize对象时需要指定对应的model路径
  * 每一个模型需要单独占用一个文件，并且采用export default的方式来导出
- 装饰器来定义数据模型

### 首先因为是用到了TS，所以环境依赖上要安装的东西会多一些：

```bash
# 这里采用ts-node来完成举例, [ts-node](https://github.com/TypeStrong/ts-node)提供了TypeScript的运行环境，让我们免去了麻烦的编译这一步骤
# 使用ts-node和vsc来调试TypeScript代码 - https://segmentfault.com/a/1190000010605261
npm i ts-node typescript
npm i sequelize reflect-metadata sequelize-typescript
```

### 其次，还需要修改TS项目对应的tsconfig.json文件，用来让TS支持装饰器的使用：

```json
{
  "compilerOptions": {
   "experimentalDecorators": true,
   "emitDecoratorMetadata": true
  }
}
```

***

1. 模型的继承
2. 类的静态方法定义
