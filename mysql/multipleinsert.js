var mydb= require('mysql')
var conn =mydb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'dbfromnode2'
})

conn.connect(function(err){
    if(err){
        throw err
    }else{
        console.log("Connectd")
        var sql="insert into Friends (id ,name,location) values ?"
        var records=[
            [4,'Nancy','Bihar'],
            [5,'Ratnesh','MP'],
            [6,'Piyu','Kolkata']
        ]
            conn.query(sql,[records],function(err,suc){
                if(err){
                    throw err
                }else
                console.log("Content Inserted")
            })
    }
})