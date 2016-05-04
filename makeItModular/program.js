var module = require ('./module')


var dirName = process.argv[2]
var fileEnd = process.argv[3]


var output = module(dirName,fileEnd,function (err, data){       
         if (err){
         	console.log('uv got an error mister');
         }
           else{
           	for (var i = 0; i < data.length; i++){
           		console.log(data[i])
           	}
           }  
       })
