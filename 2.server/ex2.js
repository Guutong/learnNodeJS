var http = require('http');

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    var steam = fs.createReadStream(__dirname+'/pages/'+'index.html','utf8');
    steam.pipe(res);
}).listen(8888,'127.0.0.1');
