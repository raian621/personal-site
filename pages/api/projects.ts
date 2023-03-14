import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

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
    let { title, description, sourceURL, htmlInput } = JSON.parse(req.body);
    console.log(title, description, sourceURL, htmlInput)
    res.status(200).json();
  }
}
