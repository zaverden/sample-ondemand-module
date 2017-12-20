// import koa from 'koa';
// import koaStatic from 'koa-static';
const Koa = require('koa');
const cors = require('@koa/cors');
const koaStatic = require('koa-static');

const app = new Koa();
app.use(cors());
app.use(koaStatic(__dirname + '/../.build'));
app.listen(3000);
app.listen(4000);
console.log(3000);
