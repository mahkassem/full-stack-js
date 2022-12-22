import fs from 'fs';
import { join } from 'path';

async function readDir(path) {
    const files = await fs.promises.readdir(path);
    return files;
}

async function readFiles(path) {
    const files = await readDir(path);
    files.map(async (file) => {
        const content = await fs.promises.readFile(join('files', file), 'utf-8');
        console.log('content', content);
    })
    return files;
}

console.log(await readFiles('files'));