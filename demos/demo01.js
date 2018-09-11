'use strict';

const Koa = require('koa');
const app = new Koa();

app.listen(3000);

console.log('Running a koa server at localhost:3000')