var fs = require('fs')
var read = process.argv[2]

fs.readFile(read,'utf8',function callback (err, data) { 
	if (err){
		console.log('error')
		}
	string(data);
});
var string = function(pig){
	var lines = pig.split('\n');
	console.log((lines.length)-(1))
};

