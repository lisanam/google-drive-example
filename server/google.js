//Library
const axios = require('axios');

const Google = {
  getImages: (APIKey, folderId, callback) => {//Get Gallery Images from Google Drive
    axios.get('https://www.googleapis.com/drive/v3/files', {
      params: {
        q: `'${folderId}' in parents`,
        key: APIKey,
        fields: 'files(id,name,mimeType)'
      }
    }).then((response) => { //return google drive data
        let metadata = response.data.files;
        //filter files that are not images
        let images = metadata.filter((image) => image.mimeType === "image/png" || image.mimeType === "image/gif");
        callback(images);
      })
      .catch((error) => { //handle error
        console.log(error);
      });
  }
}

module.exports = Google;