'use strict';

const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.body = 'Hello World';
};

app.use(main);

app.listen(3000);

console.log('Running a koa server at localhost:3000');