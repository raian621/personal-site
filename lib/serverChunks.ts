import fs from "fs"
import path from "path";

export function saveChunk(chunk:string, chunkNum: number, folder:string) {
  if (!fs.existsSync(`/tmp/${folder}`))
    fs.mkdirSync(`/tmp/${folder}`);
  fs.writeFileSync(path.join(`/tmp/${folder}`, `chunk_${chunkNum ^ 0}`), chunk, {encoding: 'base64'});
}

export async function mergeChunks(
    destination: string, 
    filename: string, 
    folder:string, 
    totalChunks: number
) {
  const stream = fs.createWriteStream(path.join(__dirname.replace(/\.next\/server\/pages\/api/, ''), destination, filename), {flags: 'w+'})
  
  for (let i = 0; i < totalChunks; i++) {
    let chunk = fs.readFileSync(path.join(`/tmp/${folder}`, `chunk_${i ^ 0}`));
    stream.write(chunk);
  }
  const unlinkPromises = Array<Promise<void>>();

  for (let i = 0; i < totalChunks; i++) {
    unlinkPromises.push(fs.promises.unlink(path.join(`/tmp/${folder}`, `chunk_${i ^ 0}`)));
  }
  await Promise.all(unlinkPromises)
  fs.rmdir(`/tmp/${folder}`, ()=>{});

  stream.end();
}