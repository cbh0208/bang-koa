import Router from 'koa-router'
import UserRouter from './user'

const router = new Router();

router.use('/user',UserRouter.routes())


export default router