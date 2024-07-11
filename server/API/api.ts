import axios from 'axios';
import Router from '@koa/router';
import os from "os";

const _ = Router();

_.get('/api', async (ctx) => {
    ctx.body = "I'm alive"
})
_.get('/api/getUsername', async (ctx) => {
    ctx.set('Content-Type', 'application/json');
    ctx.body = {username: os.userInfo().username};
})

export default _;
