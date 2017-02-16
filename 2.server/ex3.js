var http = require('http');

var user = {
    'name':'John Dev',
    'age':'24',
    'sex':'male',
    'email':'qwerty@example.com'
};
http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(user));
}).listen(8888,'127.0.0.1');