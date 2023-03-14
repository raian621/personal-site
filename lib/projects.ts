import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export async function getProjectData(id: string) {
  const fullPath = path.join('public/projects', `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content)

  return {
    id,
    content: processedContent.value,
    ...matterResult.data
  }
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync('public/projects');
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}