import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import JSZip from 'jszip';

type ProjectData = {
  title: string,
  projectLink: string,
  description: string,
  projectId: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectData|ProjectData[]|void>
) {
  if (req.method === 'GET') {
    res.status(200);
  } else if (req.method == 'POST') {
    let { file, fileName, title, description } = JSON.parse(req.body);
    
    file = file.replace(/.*,/, "");
    const tempFilePath = `/tmp/${fileName}`;
    await fs.promises.writeFile(tempFilePath, file, {encoding: 'base64'})

    if (fileName.includes(".zip")) {
      const fileContent = fs.readFileSync(tempFilePath);
      const zipper = new JSZip();
      const result = await zipper.loadAsync(fileContent)
      for (let key of Object.keys(result.files)) {
        const item = result.files[key];
        if (item.dir) fs.mkdirSync(item.name);
      }
      console.log(result);
    }

    fs.unlink(tempFilePath, (err) => { 
      if (err) console.log(err) 
    });

    res.status(200).json();
  }
}
