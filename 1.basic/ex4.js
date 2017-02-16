console.log(__filename);
console.log(__dirname);
function show(){
    console.log("-> "+__dirname)
}
var t = setTimeout(show,2000);
clearTimeout(t);
var a = setInterval(show,2000);
clearInterval(a);
