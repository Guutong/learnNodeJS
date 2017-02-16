var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Hello World!</h1>');
});

app.use('/profile/:name',(req,res,next) => {
    console.log("Request : " + req.params.name , new Date(),req.method,req.url);
    res.send('<h1>Profile '+req.params.name+'</h1>');
});

app.listen(8888);