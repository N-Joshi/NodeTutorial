var http = require('http')
var file = require('fs')

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("Working with fs module")
    file.readFile('hello.txt',function(err,data){
            if(err){
                throw err
            }
        res.write("<br>")
        res.write(data)
        file.writeFile('helo2.txt',data,function(err){
            console.log(err);
        })
        res.end()
    })
}).listen(8888)