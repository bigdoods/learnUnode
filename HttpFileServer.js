var http = require('http')
var port = process.argv[2]
var location = process.argv[3]
var fs = require('fs')

var server = http.createServer(function callback (request, response){
	server.listen('', function(){
		fs.createReadStream(location).pipe(response)
		})

}) 
server.listen(port)