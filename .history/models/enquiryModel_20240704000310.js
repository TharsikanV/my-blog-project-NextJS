const {Schema}=require('mongoose')

const enquiryS=new Schema({
    name:String,
    email:String,
    message:String
});