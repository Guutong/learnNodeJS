var fs = require('fs');
var data = 'AAAAA bbbbb CCCCC DdDdD 12345';
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data, 'utf8');
writeStream.end();

writeStream.on('finish', () => {
    console.log('write file finish!');
});