console.log('microService-3');

const express = require('express');
const app = express();
const axios = require('axios');
const mongoose = require('mongoose')
app.use(express.json());
require('../Database/Db.config');

const orderSchema = require("./order.model");

app.post('/order', (req, res) => {
    const newOrder = new orderSchema({
    id :req.body.id,
    userId: req.body.userId,
    productId: req.body.productId,
    deliveryDate: req.body.deliveryDate
 });
 newOrder.save().then(() => {
    res.send('New order added successfully!')
   }).catch((err) => {
    res.status(500).send(err.message);
   })
 })


 app.get('/orders', (req, res) => {
    orderSchema.find().then((orders) => {
       if (orders) {
           res.json(orders)
        } else {
           res.status(404).send('Orders not found');
        }
    }).catch((err) => {
           res.status(500).send('Internal Server Error!');
    });
 })
 
 app.get('/order', (req, res) => {
    const id = req.query.id
     orderSchema.findOne({id:id}).then((order) => {
        console.log("order",order)
        if (order) {
           axios.get(`http://localhost:8001/user?id=${order.userId}`).then((response) => {
          let orderObject = { 
            userName:response.data, 
            productName: '' 
           }
           console.log(response)
         axios.get(`http://localhost:7001/Product?id=${order.productId}`).then((response) => {
          orderObject.productName = response.data
          res.json(orderObject);
         })
    })	
    // res.json({status:"success",order})
      } else {
         res.status(404).send('Orders not found');
      }
     }).catch((err) => {
         res.status(500).send(err.message);
    });
 }) 







const port = 9001

app.listen(port,()=>{
    console.log(`server-3 running port is ${port}`)
})