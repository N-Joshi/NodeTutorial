var http = require('http');
var url = require('url')
//const ngrok = require('ngrok');

var server = http.createServer(serverFunction)

    function serverFunction (req, res){
        res.writeHeader(200,{'Content-Type':'text/html'})
        res.write("i am working with query")
        res.write("<br></br>")
        var myquery=url.parse(req.url,true).query
        var q1text = myquery.status;
        var q2text =  myquery.task
        res.write("Staus:"+ q1text)
        res.write("<br></br>")
        res.write("<br></br>")
        res.write("Task:"+ q2text)
        res.write("<br></br>")
        res.write(req.url)
        res.end()
    }

server.listen(3002)
