const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const userSchema =new Schema({
    fullName:{type:String},
    email:{type:String},
    password:{type:String},
    createdon:{type:Date, Defaulf:new Date().getTime()},

});

module.exports=mongoose.model("user",userSchema);