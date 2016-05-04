
var fs = require ('fs')
var path = require ('path')

module.exports = function lad (x , y , callback){
	fs.readdir(x, function (err, data){
		if (err) return callback(err);
			else{
			var jam = [];
			for(var i in data){
				if(path.extname(data[i]) === '.' + y)
					jam.push(data[i])
					}
				}
			callback(err, jam)

		});
	}

