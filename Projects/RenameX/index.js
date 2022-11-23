const fs = require('fs');
const replaceThis = 'praj';
const replaceWith = 'drake';
const path = require('path');
const preview = false;
//! It gives the current directory 
const folder = __dirname;
try {
  fs.readdir(folder, (err, data) => {
    console.log(data);
    for (let i = 0; i < data.length; ++i) {
      const file = data[i];
      let oldFile = path.join(folder, file);
      let newFile = path.join(folder, file.replaceAll(replaceThis, replaceWith));
      if (!preview)
        fs.rename(oldFile, newFile, () => {
          console.log('Rename Success');
        });
      else console.log(`${"data/" + file !== newFile ? `${file} will be renamed to ${newFile}` : 'cannot rename file with same name :/'}`);
    }
    if (err) console.log('Enable to read directory');
  })
} catch (err) {
  console.error(err.message);
}
