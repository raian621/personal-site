import sanitizeHtml from "sanitize-html";

export const SanitizedHTML = ({ className, html } : 
  { html:string, className: string }
) => {
  const options = {
    ...sanitizeHtml.defaults,
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      "img"
    ]
  } as sanitizeHtml.IOptions

  return <div className={className} style={{width: "100vw"}} dangerouslySetInnerHTML={{__html: sanitizeHtml(html, options)}}/>
}