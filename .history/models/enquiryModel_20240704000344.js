const {Schema,model}=require('mongoose')

const enquirySchema=new Schema({
    name:String,
    email:String,
    message:String
});

const EnquiryModel=