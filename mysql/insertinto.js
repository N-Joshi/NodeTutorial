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
        var sql="insert into Friends (id ,name,location) values (3,'Rakshit','Bhowali')"
            conn.query(sql,function(err,suc){
                if(err){
                    throw err
                }else
                console.log("Content Inserted")
            })
    }
})