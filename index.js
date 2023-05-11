const express=require('express')
const app=express()
const mysql=require('mysql')
const db=mysql.createConnection({
    user:"root" ,
    host: "localhost",
    password: "",
    database:"UserDB",
})

app.use(express.json())

app.get('/users',(req,res)=>{
   db.query("SELECT * FROM users;",(err,result)=>{
    if(err){
res.status(400).json(err)
    }else{
        res.status(200).json(result)
    }

   })
})

app.post('/users',(req,res)=>{

const {name,age}=req.body

    db.query("INSERT INTO users(name,age) VALUES(?,?);",
    (err,result)=>{
        if(err){
    res.status(400).json(err)
        }else{
            res.status(200).json(result)
        }
    
       })
    })
    

app.put('/users',(req,res)=>{
    const newName=req.body.newName
    for(let i=0; i<userList.length; i++){
        userList[i].name=newName
    }
    res.json(userList)
})

app.delete('/users/:id',(req,res)=>{

    const id=req.params.id
    let foundId=false
 for(let i=0; i<userList.length; i++){
    if (userList[i].id==id){
        userList.splice(i,1)
        foundId=true
    }
 }

 if(!foundId){
    res.status(404).json({error: "User Id not found"})
 }else{
    res.json(userList)
 }
    res.json(userList)
})


app.listen('3001',()=>{
    console.log("Server running on port 3001")
})