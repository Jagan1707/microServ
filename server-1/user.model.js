const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({
    user_id : {
        type:Number,
        require:true
    },
    name :{
        type:String,
        require:true
    },
    mobile : {
        type:Number,
        require:true
    },
    email : {
        type:String,
        require:true
    }
})


module.exports = mongoose.model('userDetails',userSchema);