const mongoose = require('mongoose');

const order = mongoose.Schema({
    id : {
        type : Number,
        require : true
    },
    userId : {
        type: Number,
        require:true
    },
    productId : {
        type :  Number,
        require : true
    },
    deliveryDate : {
        type : String,
        require : true
    }
})


module.exports = mongoose.model("orderList",order);