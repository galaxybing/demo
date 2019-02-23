const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
const Router = require('koa-router');
const serve = require('koa-static');
const r = new Router(); // routerInstance
const path = require('path');
const views = require('koa-views');

app.use(views(path.join(__dirname, '/../apps'), {
  map: {
    html: 'underscore'
  }
}));

app.use(koaBody());
app.use(serve(path.join(__dirname, '/../apps/')));

r.get("/hospital-admin/admin-cms/*.html", (ctx, next) => {
  return ctx.render("./admin-cms/dist/index.html");
});

/* 单例启动
app
  .use(r.routes())
  // .use(r.allowedMethods())
  .listen(3001);
*/

app.use(r.routes());

module.exports = app;
