var fs = require('fs')
var path = require('path')
var dirname = process.argv[2]
var type = process.argv[3]
var catType = ('.' + type)

fs.readdir(dirname, function (err, list) {;
	for(var j in list){
			if(path.extname(list[j]) === catType){
				var jam = list[j];
				console.log(jam)
			}
		}
});



//print list of files by extension of file
//One per line