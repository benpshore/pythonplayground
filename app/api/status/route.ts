import { env } from 'cloudflare:workers';
import { authorize, failure, json } from '@/lib/api';
export async function GET(request:Request){try{await authorize(request);return json({aiConnected:!!env.OPENAI_API_KEY,storageConnected:!!env.DB})}catch(e){return failure(e)}}
