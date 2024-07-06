import Koa from 'koa'
import routes from './API/api.js'
import Router from '@koa/router'
import serve from 'koa-static'
import cors from '@koa/cors'
import os from 'os'
import process from "../.eslintrc.cjs";

const app = new Koa()
const _ = Router()
app.context.env = process.env.NODE_ENV || 'development'
app.use(cors())

_.get('/', async (ctx) => {
    ctx.body = "I'm alive"
})

_.get('/api/getUsername', async (ctx) => {
    ctx.set('Content-Type', 'application/json');
    ctx.body = {username: os.userInfo().username};
})

app.use(serve('dist'));

app.use(_.routes())
app.use(_.allowedMethods())
app.use(routes.routes())
app.use(routes.allowedMethods())

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));


