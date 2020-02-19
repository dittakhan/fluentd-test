import { AddressInfo } from 'net';
import * as Koa from 'koa';
import { logger } from './logger';
const app = new Koa();

app.use(async ctx => {
    logger.info("hello winston");
    ctx.body = 'Hello Winston';
});

let server = app.listen(process.env.PORT || 4000);
logger.info(`Listening on port ${(<AddressInfo>server.address()).port}`);
