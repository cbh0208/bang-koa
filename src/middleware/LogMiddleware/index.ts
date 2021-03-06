import  { BaseContext } from 'koa'
import {formatTimeForSee} from '../../utils/time';

/** log 中间件*/
export default async function (ctx: BaseContext, next: () => Promise<any>) {
    const start=new Date()
    await next();
    const end=new Date()
    const duration=end.getTime()-start.getTime()
    console.log(`[${formatTimeForSee(start)}] "${ctx.method} ${ctx.url}" ${ctx.status} ${duration}`);
}