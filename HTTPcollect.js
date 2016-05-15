var http = require('http')
var URL = process.argv[2]
var info = [];

http.get(URL,function(res){
    res.setEncoding('utf8');
    res.on("data",function(input){
        info.push(input);
    });
    res.on("error",console.error);
    res.on("end",function(){
    	console.log(info.join("").length)
        console.log(info.join(""));
    });
});