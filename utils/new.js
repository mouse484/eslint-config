const fs = require('fs');
const path = require('path');
const { argv } = require('process');

const [, , newName = 'new'] = argv;

const packagesPath = path.resolve(__dirname, '../packages');

const templateDirPath = path.join(packagesPath, '.template');
const destDirPath = path.join(packagesPath, newName);

fs.mkdirSync(destDirPath);

console.log(`Make new rule ${newName}`);

fs.readdir(templateDirPath, (err, files) => {
  if (err) throw new Error(err);
  files.forEach((value) => {
    const srcPath = path.join(templateDirPath, value);
    const destPath = path.join(destDirPath, value);

    fs.copyFileSync(srcPath, destPath);

    console.log(`Make file: ${destPath}`);
  });
});
