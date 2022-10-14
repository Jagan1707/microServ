const mongoose = require('mongoose');

const productSchema =  mongoose.Schema({
    id : {
        type:Number,
        require:true
    },
    productName :{
        type:String,
        require:true
    },
    quantity : {
        type:String,
        require:true
    },
    price : {
        type:String,
        require:true
    }
})


module.exports = mongoose.model('productdata',productSchema);