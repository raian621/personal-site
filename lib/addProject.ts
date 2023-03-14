import sanitizeHtml from "sanitize-html"

export const addProject = async({ title, description, sourceURL, thumbnail, technologies, htmlInput } : {
  title:        string,
  description:  string,
  sourceURL?:    string|null|undefined,
  thumbnail?:    File|null|undefined,
  technologies?: string[]|null|undefined,
  htmlInput:     string
}) => {
  const getBase64 = (file:File|null|undefined) => {
    return new Promise<string|ArrayBuffer|null>((resolve, reject) => {
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
      }
      console.log(file)
      reader.onload = () => {
        console.log(reader.result)
        resolve(reader.result)
      };
      reader.onerror = error => reject(error);
    });
  }

  const options = {
    ...sanitizeHtml.defaults,
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      "img"
    ]
  } as sanitizeHtml.IOptions

  fetch('/api/projects', {
    method: 'POST',
    body: JSON.stringify({
      title,
      description,
      sourceURL,
      htmlInput: sanitizeHtml(htmlInput, options)
    })
  })
}