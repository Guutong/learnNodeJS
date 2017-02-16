var http = require('http');
var fs = require('fs');

var user = {
    'name':'John Dev',
    'age':'24',
    'sex':'male',
    'email':'qwerty@example.com'
};
http.createServer((req,res) => {
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        var steam = fs.createReadStream(__dirname+'/pages/'+'index.html','utf8');
        steam.pipe(res);
    } else if(req.url === '/json'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(user));
    } else if(req.url === '/hello'){
       res.writeHead(200,{'Content-Type':'text/plaint'});
        res.end("Hello world");
    } else {
        res.writeHead(404,{'Content-Type':'text/html'});
        var steam = fs.createReadStream(__dirname+'/pages/'+'404.html','utf8');
        steam.pipe(res);
    }
}).listen(8888,'127.0.0.1');