const {Schema}=require('mongoose')

const enquirySchema=new Schema({
    name:String,
    email:String,
    message:String
});

const Enquiry