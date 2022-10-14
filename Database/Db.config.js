const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testUser",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(res=>{
    console.log("database connected successfully!")
}).catch(err=>{
    console.log("err",err.message);
})