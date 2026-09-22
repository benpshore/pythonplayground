import { spawnSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
mkdirSync('.sites-runtime/test-build',{recursive:true});
const c=spawnSync(process.execPath,['node_modules/typescript/bin/tsc','lib/feed-parser.ts','lib/lessons.ts','lib/lesson-schema.ts','lib/sources.ts','--outDir','.sites-runtime/test-build','--module','commonjs','--moduleResolution','node','--target','es2022','--esModuleInterop','--skipLibCheck'],{stdio:'inherit'});if(c.status!==0)process.exit(c.status||1);
writeFileSync('.sites-runtime/test-build/package.json',JSON.stringify({type:'commonjs'}));
const r=spawnSync(process.execPath,['tests/core.cjs'],{stdio:'inherit'});process.exit(r.status||0);
