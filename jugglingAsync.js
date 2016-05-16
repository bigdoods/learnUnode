var http = require('http')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]
var info = []
var checkin = 0
var rec1 = []
var rec2 = []
var rec3 = []

http.get(url1, function callback(response){
	response.setEncoding('utf8')
	response.on('data', function(input){
		var x = input
		rec1.push(x)
	})
	response.on('error', console.error)
	response.on('end', function(){
		checkin += 1
		printItOut()
	})
})


http.get(url2, function callback(response){
	response.setEncoding('utf8')
	response.on('data', function(input){
		var y = input
		rec2.push(y)
	})
	response.on('error', console.error)
	response.on('end', function(){
		checkin += 1
		printItOut()
	})
})


http.get(url3, function callback(response){
	response.setEncoding('utf8')
	response.on('data', function(input){
		var z = input
		rec3.push(z)
	})
	response.on('error', console.error)
	response.on('end', function(){
		checkin += 1
		printItOut()
	})
})



var printItOut = function(){
	if (checkin === 3){
		info.push(rec1.join(''))
		info.push(rec2.join(''))
		info.push(rec3.join(''))
		console.log(info.join('\n'))
} 
}

