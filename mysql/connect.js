var mydb= require('mysql')
var conn =mydb.createConnection({
    host:'localhost',
    user:'root',
    password:''
})

conn.connect(function(err){
    if(err){
        throw err
    }else{
        console.log("Holla!!!! Connected")
    }
})