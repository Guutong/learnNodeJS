var fs = require('fs');
var readme = fs.readFileSync('./HelloNode.txt','UTF8');
console.log(readme);
fs.writeFileSync('HelloNode.txt',readme);
fs.mkdir('project',() => {
    fs.writeFileSync('./project/HelloNode.txt',readme);
});
 