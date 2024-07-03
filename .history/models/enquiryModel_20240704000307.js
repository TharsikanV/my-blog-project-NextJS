const {Schema}=require('mongoose')

const enquiry=new Schema({
    name:String,
    email:String,
    message:String
});