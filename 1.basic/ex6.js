var fs = require('fs');
var data = '';
var readStream = fs.createReadStream('./server/code.txt');
readStream.setEncoding('UTF8');
readStream.on('data', (txt) => {
    data += txt;
});
readStream.on('end', () => {
    console.log(data);
});
readStream.on('error', (err) => {
    console.log("error : " + err.stack);
});


