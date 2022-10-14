console.log('microService-2');

const express = require('express');
const app = express();
const axios = require('axios');
 const cors = require('cors');
app.use(cors())
app.use(express.json());
require('../Database/Db.config');
const productSchema = require('./product.model');

app.post('/create', (req, res) => {
    const newproduct = new productSchema(req.body);
    console.log("body",req.body)
    newproduct.save().then(() => {
       res.send('New product created successfully!');
    }).catch((err) => {
        res.status(500).send(err.message);
    })
})
app.get('/readProduct', (req, res) => {
    productSchema.find().then((product) => {
       if (product) {
          res.json(product)
       } else {
          res.status(404).send('product not found');
       }
    }).catch((err) => {
         res.status(500).send('Internal Server Error!');
   });
})

app.get('/product', (req, res) => {
    const id = req.query.id
    productSchema.findOne({id:id}).then((product) => 	{
     if (product) {
          res.json(product)
      } else {
          res.status(404).send('product not found');
      }
    }).catch((err) => {
          res.status(500).send('Internal Server Error!');
   });
})






const port = 7001


app.listen(port,()=>{
    console.log(`server-2 is running port is ${port}`)
})