var http = require('http')
var map = require('through2-map')
var port = process.argv[2]


var server = http.createServer(function (request, response){
	server.listen('', function callback(){
		request.pipe(map(function (chunk){
			return chunk.toString().toUpperCase()
		})).pipe(response)

		})
})
server.listen(port)