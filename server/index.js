const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
const mysql = require("mysql");


const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"firstapp"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))




app.post("/insert",(req,res)=>{
    
    // db.query({sql:"INSERT INTO `from`( `name`, `email`, `password`) VALUES (?,?,?)",values:[req.body.fastname, req.body.email, req.body.password]},(error, result)=>{
        
        
        db.query({sql:"INSERT INTO `from`( `name`, `email`, `phone`, `password`) VALUES (?,?,?,?)",values:[req.body.fastname, req.body.email,req.body.phone, req.body.password]},(error,result)=>{

      
        
        
        if (error) {
            console.log(error)
            res.status(200).json({error: error})
        }else{
            console.log(result)
            res.status(200).json({message: "Successfull"})
        }
    })
});


app.listen(3001,()=>{
    console.log("running on port 3001");
});