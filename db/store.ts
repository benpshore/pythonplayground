import { env } from 'cloudflare:workers';
export function database(){if(!env.DB)throw Error('Private storage is not connected yet.');return env.DB;}
export async function readState(key:string){return database().prepare('SELECT value, updated FROM state WHERE key = ?').bind(key).first<{value:string;updated:number}>();}
export async function writeState(key:string,value:unknown){return database().prepare('INSERT INTO state (key,value,updated) VALUES (?,?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated=excluded.updated').bind(key,JSON.stringify(value),Date.now()).run();}
