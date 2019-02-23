issue:

- 导入 null 字段配置为 ''，以避免导入保存不成功；
- 联调进度标识展示
- 联连其他版本时，新增字段的标识及重置操作；

***


1. 查看demo效果(登录ssh界面):

  $ cd /apps/demo/sequelizejs
  $ npm run test | node index.js

2. 查看数据库状态

- phpmyadmin 界面 - http://localhost/phpmyadmin/sql.php?server=1&db=rap2_delos_app_local&table=demousers&pos=0

- rap2_delos_app_local

```bash
# sql操作数据表结构
$ ssh root@172.16.150.246
$ mysql # 进入mysql 终端命令行

mysql> show databases;
mysql> use rap2_delos_app_local;
# Error: Cannot delete or update a parent row: a foreign key constraint fails
# 解决方式：不检查外链，设置FOREIGN_KEY_CHECKS变量：
mysql> SET FOREIGN_KEY_CHECKS = 0;
mysql> DROP TABLE IF EXISTS `demo_users`;
# 删除完成后恢复设置
mysql> SET FOREIGN_KEY_CHECKS = 1;
mysql> exit;

```


## 前、后端ORM概念区分（object relational mapping）

* 服务器端的ORM框架主要是对与数据库交互的接口进行封装并提供出更加友好易用的接口
* 前端的ORM框架主要就应该是要对与服务器的数据交互进行封装？？不仅如此

- api接口管理平台
  * 服务器ip 172.16.150.141
  * shell账号【见，/Confluence/Documents-文档记录/Company/com_317hu-伯仲信息技术】
  * 安装及启动操作[步聚](http://noonteam.com/pages/viewpage.action?pageId=884812)
- demo 示例：/servers/server-root-141/apps/demo/sequelizejs/index.js

数据库访问（172.16.150.246, 'rap2_delos_app_local', 'fe', 'fe@100153'）：
  - http://localhost/phpmyadmin/sql.php?server=1&db=rap2_delos_app_local&table=demo_users&pos=0


***

## 文档 - http://docs.sequelizejs.com/

- 官方源码 - https://github.com/sequelize/sequelize/blob/master/lib/query-types.js
  - 核心方法 - http://docs.sequelizejs.com/identifiers
    * sequelize.import - http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-method-import
    * `public static create 模型的方法` - http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-create
  - [sequalize-docs-Zh-CN](https://github.com/demopark/sequelize-docs-Zh-CN)，主要是对照文档目录的示例讲解
    - Associations - 关联 - https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/associations.md
      * a.belongsTo(b) 外键bId
      * c.hasMany(a) 外键cId
      * Sequelize 中文API文档－3. 模型（表）之间的关系/关联 - 2016-05-22 - https://itbilu.com/nodejs/npm/41qaV3czb.html

- sequelize-typescript
  * Decorators and some other features for sequelize (v3, v4, v5). - https://www.npmjs.com/package/sequelize-typescript
  * 从 SQL-npm-mysql、Sequelize 到 Sequelize-typescript - https://blog.csdn.net/w178191520/article/details/82954091
    - 基于Sequelize针对TypeScript所实现的一个增强版本,抛弃了之前繁琐的模型定义,使用装饰器直接达到我们想到的目的

- [github仓库组](https://github.com/sequelize)

## 参考资料：

* [itbilu - IT笔录](https://itbilu.com/page-55.html)
  - [Sequelize 中文API文档－1. 快速入门、Sequelize类](https://itbilu.com/nodejs/npm/VkYIaRPz-.html#api-instance-import)

* kayorl - 2016.11.27
  - [Sequelize(1) 让Node操作MySQL更方便](https://www.jianshu.com/p/94d96df8d963)
  - [Sequelize(2) 定义表格](https://www.jianshu.com/p/a644e05503b0)
  - [Sequelize(3) CRUD](https://www.jianshu.com/p/8242b841de9d)
  - [Sequelize(4) 范围](https://www.jianshu.com/p/aa8eb5ac8d39)
  - [Sequelize(5) 一对多对多](https://www.jianshu.com/p/cda600a6c014)

* Sequelize.js 入门 - examples 示例 2018年10月15日
 - [示例、模型定义、模型使用、查询相关、实例、事务、钩子、SQL语句](https://blog.csdn.net/alex_my/article/details/83062458)
 - [javascript-learn](https://github.com/alex-my/javascript-learn/tree/master/sequelize)

* express
  - https://github.com/sequelize/express-example/

* koa
- DemoPark所整理的系统文章，它拥有的 segmentFault 账号还写有：Koa 2 系列等；都可以一起看一下。
  [sequalize-docs-Zh-CN](https://segmentfault.com/blog/demopark?page=2)，主要是对照文档目录的示例讲解；
  [koa2-docs-Zh-CN](https://github.com/demopark/koa-docs-Zh-CN)

* [Sequelize和MySQL对照 【翻译】](https://blog.csdn.net/yinkaihui/article/details/52038208)转载至：[译](https://segmentfault.com/a/1190000003987871#articleHeader9)2015-11-12 发布
  - 简书搜索 https://www.jianshu.com/search?q=Sequelize%E5%92%8CMySQL%E5%AF%B9%E7%85%A7&page=1&type=note
