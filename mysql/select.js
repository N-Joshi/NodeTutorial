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
        var sql="select * from Friends"
            conn.query(sql,function(err,result,suc){
                if(err){
                    throw err
                }else
                console.log("Friends Are:")
                console.log(JSON.stringify(result))
            })
    }
})