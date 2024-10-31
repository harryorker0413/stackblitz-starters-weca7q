const Koa = require('koa');
const logger = require('koa-logger');
const router = require('@koa/router')();
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// middlewares
app.use(logger());
app.use(bodyParser());

const helloWorld = (ctx) => {
  ctx.body = 'Hello World!!!0000';
};

const add = (ctx) => {
  const { a, b } = ctx.query;
  const sum = Number(a) + Number(b);
  ctx.body = {
    result: sum,
  };
};

router.get('/', helloWorld);
router.get('/add', add);

app.use(router.routes());

app.listen(3000);
