const Koa = require('koa')
const serve = require('koa-static')
const parse = require('koa-bodyparser')
const favicon = require('koa-favicon');

const app = new Koa()
const port = process.env.PORT || 3000

app.use(parse())

app.use(favicon('client' + '/icon.ico'));

app.use(serve('client'))

app.listen(port)

console.log('App is listening at http://127.0.0.1:3000')