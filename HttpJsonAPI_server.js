var http = require('http')
var url = require('url')
var port = process.argv[2]

var parser = function(query){
	
	console.log(query.iso) //2016-05-22T12:44:58.648Z

	var v = new Date()

	console.log(v) //Sun May 22 2016 13:41:46 GMT+0100 (BST)

	console.log(Date.parse(v)) //1463919885000

	var y = v.toISOString()

	console.log(y) //2016-05-22T12:24:45.633Z

	var z = new Date(y)

	console.log(z) //Sun May 22 2016 13:41:46 GMT+0100 (BST)

}


var server = http.createServer(function callback(request, response){
	if (url.parse(request.url, true).pathname === '/api/parsetime'){
		parser(url.parse(request.url, true).query)
	} else if(url.parse(request.url, true).pathname === '/api/unixtime'){
		console.log('fuk')}
		else (console.log('shit'))
	
}) 
server.listen(port)