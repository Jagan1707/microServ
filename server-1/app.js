console.log("microService-1");

const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
app.use(express.json());
require('../Database/Db.config');
const userSchema = require('./user.model');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const port = 8001



app.post('/create',async(req,res)=>{
    const userData = new userSchema({...req.body});
    userData.save().then(result=>{
        console.log("result",result)
       return res.status(200).json({message:'New user created successfully!',"result":result});
    }).catch(err=>{
       return res.status(400).json(err.message);
    })
})

app.get('/Alluser', (req, res) => {
    userSchema.find().then((user) => {
       if (user) {
          res.json(user)
       } else {
          res.status(404).send('user not found');
       }
    }).catch((err) => {
         res.status(500).send('Internal Server Error!');
   });
})

// app.get('/user', (req, res) => {
//     const id = req.query.id
//     userSchema.findOne({id:id}).then((user) => 	{
//      if (user) {
//           res.json(user)
//       } else {
//           res.status(404).send('user not found');
//       }
//     }).catch((err) => {
//           res.status(500).send('Internal Server Error!');
//    });
// })
app.get('/user', (req, res) => {
    const id = req.query.id
    userSchema.findOne({user_id:id}).then((user) => 	{
     if (user) {
          res.json(user)
      } else {
          res.status(404).send('product not found');
      }
    }).catch((err) => {
          res.status(500).send('Internal Server Error!');
   });
})



app.listen(port,()=>{
    console.log(`server-1 is running port is ${port}`)
})



