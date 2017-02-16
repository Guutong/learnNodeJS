var fs = require('fs');
var reader = fs.createReadStream('./server/code.txt')
var writer = fs.createWriteStream('./server/file1.txt');

reader.pipe(writer);