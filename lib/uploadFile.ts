import { resolve } from "path";

export async function uploadFile(
  file:        File,
  destination: string,
  fileName:    string,
  progress:    { progress:number },
  chunkSize:   number = 250000,
  uploads:     number = 10,
) {
  let activeUploads = 0;
  const totalChunks = Math.ceil(file.size / chunkSize);
  let sentChunks = 0;

  let start = 0;
  let end = 0;
  for (let c = 0; c < totalChunks; c++) {
    start = c * chunkSize;
    end = (c + 1) * chunkSize;
    console.log(`start = ${start}\nend = ${end}`)
    console.log("Active Uploads = ", activeUploads)

    while(activeUploads >= uploads) {
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    activeUploads++;
    uploadChunk(file.name, file.slice(start, end), c, totalChunks)
      .then(() => { 
        activeUploads--;
        sentChunks++;
        progress.progress = sentChunks / totalChunks;
      });
  }

  while (activeUploads > 0)
    await new Promise(resolve => setTimeout(resolve, 300));

  await fetch('/api/upload/', {
    method: 'POST',
    body: JSON.stringify({
      chunkNum: totalChunks,
      totalChunks,
      fileName,
      destination 
    })
  });
}

function uploadChunk(
  fileName:     string,
  chunkBlob:    Blob,
  chunkNum:     number,
  totalChunks:  number,
) {
  return new Promise<void>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(chunkBlob);
    reader.onload = e => {
      const result = reader.result;
      const chunk = result ? (<string>result).replace(/.*,/, '') : "";

      fetch('/api/upload/', {
          method: 'POST',
          body: JSON.stringify({
            chunk: chunk,
            chunkNum: chunkNum,
            totalChunks: totalChunks,
            fileName: fileName
          })
        })
        .then(res => {
          if (res.ok) {
            resolve();
          } else {
            reject("Server did not respond.");
          }
        })
        .catch(err => {
          console.log(err);
          reject("fetch error");
        });
    }
  })
}