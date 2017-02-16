var http = require('http');

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plaint'});
    res.end("Hello world");
}).listen(8888,'127.0.0.1');
