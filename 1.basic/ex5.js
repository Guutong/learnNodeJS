var buf = new Buffer(3);
console.log("1 buf : "+buf.toString());
buf.write("Hello");
console.log("2 buf : "+buf.toString());
console.log("3 buf : "+buf.length);

var xyz = new Buffer(26);
for(var i = 0;i<26;i++){
    xyz[i] = i+97;
}
console.log(xyz.toString('ascii'));
var buf = new Buffer("Hello World!");
var buf2 = new Buffer("Hello Galaxy!");
var json = buf.toJSON();
console.log(json);
var buf3 = Buffer.concat([buf,buf2]);
console.log(buf3.toString());
