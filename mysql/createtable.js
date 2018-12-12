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
        //var sql="create table Friends (name varchar(32),id int(8),location varchar(32))"
            conn.query(sql,function(err,suc){
                if(err){
                    throw err
                }else
                console.log("Table Created")
            })
    }
})