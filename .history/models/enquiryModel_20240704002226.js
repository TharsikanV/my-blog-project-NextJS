const {Schema,models, model}=require('mongoose')

const enquirySchema=new Schema({
    name:{
        type:String,
        requ
    },
    email:String,
    message:String
});

const EnquiryModel=models.Enquiry || model('Enquiry',enquirySchema)

export default EnquiryModel;