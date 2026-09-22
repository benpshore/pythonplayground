import { authorize, failure, json, body, ApiError } from '@/lib/api';
import { database } from '@/db/store';
async function progress(owner:string){const data=await database().prepare('SELECT kind,item FROM activity WHERE owner=?').bind(owner).all<{kind:string;item:string}>();return{saved:data.results.filter(x=>x.kind==='bookmark').map(x=>x.item),completed:data.results.filter(x=>x.kind==='complete').map(x=>x.item)}}
export async function GET(request:Request){try{return json(await progress(await authorize(request)))}catch(e){return failure(e)}}
export async function POST(request:Request){try{const owner=await authorize(request,true);const {action,id,saved}=await body(request);if(!['bookmark','complete'].includes(action)||typeof id!=='string'||!id.length||id.length>100)throw new ApiError('Invalid progress update.',400);if(action==='bookmark'){
 // An explicit desired state makes retries safe.
 if(typeof saved!=='boolean')throw new ApiError('Choose whether to save this article.',400);if(!saved)await database().prepare('DELETE FROM activity WHERE owner=? AND kind=? AND item=?').bind(owner,action,id).run();else await database().prepare('INSERT OR IGNORE INTO activity(owner,kind,item,created) VALUES(?,?,?,?)').bind(owner,action,id,Date.now()).run();
 }else await database().prepare('INSERT OR IGNORE INTO activity(owner,kind,item,created) VALUES(?,?,?,?)').bind(owner,action,id,Date.now()).run();return json(await progress(owner));}catch(e){return failure(e)}}
