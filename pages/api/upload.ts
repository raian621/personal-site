import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import { mergeChunks, saveChunk } from 'lib/serverChunks';

export default async function upload(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  const data = JSON.parse(req.body);
  console.log(`Received chunk (${data.chunkNum + 1}/${data.totalChunks})`)
  if (data.chunkNum == data.totalChunks) {
    const { totalChunks, destination, fileName } = data;
    await mergeChunks(destination, fileName, fileName, totalChunks);
  } else {
    const { chunk, chunkNum, fileName } = data;
    saveChunk(chunk, chunkNum, fileName)
  }
    
  res.status(200).json();
}
