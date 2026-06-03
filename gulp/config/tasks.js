const fileSystem = require('fs');
const path = './gulp/tasks';
const arrPathFiles = fileSystem.readdirSync(path).map(link => path+'/'+link);
module.exports = arrPathFiles;