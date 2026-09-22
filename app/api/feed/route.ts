import { authorize, failure, json } from '@/lib/api';
import { getArticles } from '@/lib/feed';
import { hasAI } from '@/lib/ai';
export async function GET(request:Request){try{await authorize(request);return json({...await getArticles(),aiConnected:hasAI()})}catch(e){return failure(e)}}
