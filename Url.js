var http = require('http');
//const ngrok = require('ngrok');

var server = http.createServer(serverFunction)

    function serverFunction (req, res){
        res.writeHeader(200,{'Content-Type':'application/json'})
        res.write(JSON.stringify(
            { 
            "id": 1,
            "title": "Fornight",
            "description": "Goffy ",
            "link": "./image/card1.png",
            "url":"#",
            "uvotes": "200",
            "dvotes": "20",
            "submittedBy": "Naman",
            "avatar":"./image/avatar.png",
            "productUrl":"./image/fort.jpg"
    }))
        res.end()
    }

server.listen(5000)
