var fs = require('fs');
var read = fs.readFileSync(process.argv[2]); 
var str = read.toString();
var lines = str.split('\n');
console.log((lines.length)-(1));

