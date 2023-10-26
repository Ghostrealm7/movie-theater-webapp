const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

// Initiate Express Application
const app = express()

app.use(express.json())

//Initiate CORS to loosen API restrictions
app.use(cors())

// Initiate Database Connection
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"movieapp_db",
})

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Database Connection Succesfull')
});




// Post Movie API
app.post("/movies/upload", (req, res) =>{

})






//GET Movie API
app.get("/", (req, res) => {
    res.send("hello world")
})

//Server port 3001
app.listen(3001, ()=> {
    console.log('running on port 3001');
})