const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const Pusher = require("pusher");

const app = express()
app.use(express.json())  // read json data
app.use(cors())  // frontend and backent link

// pusher real time message get
const pusher = new Pusher({
    appId: "1671825",
    key: "5609850d48c0c53de943",
    secret: "1b0e5fab0a68989e7979",
    cluster: "ap2",
    useTLS: true
  });

// dataBase
const dbURL = 'mongodb://localhost:27017/whatsAppClone'

mongoose.connect(dbURL,{
    useNewUrlParser: true,
      useUnifiedTopology: true,
    
})

const db = mongoose.connection;
db.once('open',()=>{
    console.log("db connected");

// const msgCollection = db.collection('messages') 
// const changeStream1= msgCollection.watch() 

// changeStream1.on('change',(change)=>{
//     console.log(change);
// });
});





// route
app.get( '/', (req,res)=>{
    res.send('hello backend')
})
// app.post("/group/create", (req, res) => {
//     const name = req.body.groupName;
//     Rooms.create({ name })
      
//   });
  

const mes = require('./route/mes')


app.use('/api/v1',mes)


app.listen(8000,()=>{
    console.log("server is running");
})