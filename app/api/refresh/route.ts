import { authorize, failure, json } from '@/lib/api';
import { refreshFeed } from '@/lib/feed';
export async function POST(request:Request){try{await authorize(request,true);return json(await refreshFeed())}catch(e){return failure(e)}}
