'use strict';

const Koa = require('koa');
const route = require('koa-route');

const app = new Koa();

const main = ctx => {
    ctx.response.body = 'Hello World';
};

const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
}

app.use(route.get('/',main));
app.use(route.get('/about',about));

app.listen(3000);

console.log('Running a koa server at localhost:3000')