import { env } from 'cloudflare:workers';
import { ApiError } from './api';
export const hasAI=()=>Boolean(env.OPENAI_API_KEY);
export async function ai(instructions:string,input:unknown,schema:Record<string,unknown>,name:string){
 if(!env.OPENAI_API_KEY)throw new ApiError('The AI coach is not connected yet. The built-in puzzles still work.');
 const response=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{Authorization:`Bearer ${env.OPENAI_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({model:env.OPENAI_MODEL||'gpt-5-mini',store:false,instructions,input:JSON.stringify(input),reasoning:{effort:'low'},max_output_tokens:5000,text:{format:{type:'json_schema',name,strict:true,schema}}}),signal:AbortSignal.timeout(55000)});
 if(!response.ok)throw new ApiError(response.status===429?'The AI is busy. Try again in a moment.':'The AI connection needs attention. Built-in practice is still available.');
 const data=await response.json() as {output?:{content?:{type:string;text?:string}[]}[]};
 const output=data.output?.flatMap(x=>x.content||[]).filter(x=>x.type==='output_text').map(x=>x.text).join('');
 if(!output)throw new ApiError('The AI could not finish this time. Please try again.');
 try{return JSON.parse(output)}catch{throw new ApiError('The AI response was incomplete. Please try again.')}
}
export const objectSchema=(properties:Record<string,unknown>)=>({type:'object',properties,required:Object.keys(properties),additionalProperties:false});
export const str={type:'string'};export const strs={type:'array',items:str};
