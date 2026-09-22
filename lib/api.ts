import { getChatGPTUser } from '@/app/chatgpt-auth';
export async function authorize(request:Request,write=false){const user=await getChatGPTUser();if(!user)throw new ApiError('Sign in to your private site to connect the feed and save progress.',401);if(write){const origin=request.headers.get('origin');if(!origin||origin!==new URL(request.url).origin)throw new ApiError('Please use this action from your private site.',403);}return user.userId;}
export class ApiError extends Error{constructor(message:string,public status=503){super(message)}}
export function failure(error:unknown){return Response.json({error:error instanceof ApiError?error.message:'This connection is unavailable. Please try again shortly.'},{status:error instanceof ApiError?error.status:503,headers:{'Cache-Control':'no-store'}});}
export function json(data:unknown){return Response.json(data,{headers:{'Cache-Control':'no-store'}})}
export async function body(request:Request){const text=await request.text();if(text.length>24000)throw new ApiError('That snippet is too long. Try a smaller example.',400);try{return JSON.parse(text)}catch{throw new ApiError('The request could not be read.',400)}}
