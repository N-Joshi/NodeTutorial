var http = require('http');
//const ngrok = require('ngrok');

var server = http.createServer(function(req, res){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("Gracious!! for Visiting Amour ")
        res.end()
})

server.listen(5000)

/*(async function() {
  const url = await ngrok.connect();
})();*/

