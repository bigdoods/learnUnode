var net = require('net')
var port = process.argv[2]
var strf = require('strftime')

var server = net.createServer(function (socket){
	//socket handling logic
	socket.write(strf('%F %H:%M'))  
	socket.end('\n')
})
server.listen(port)