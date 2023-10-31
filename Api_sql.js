const mysql= require("mysql");

const con= mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"test"
});


con.query("select * from users",(err,result)=>{
  if(err)
  {
    console.warn("some error")
  }
  else{
    console.warn(result)
  }
})