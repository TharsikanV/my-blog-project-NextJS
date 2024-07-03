import { Schema, model,models} from "mongoose";

const postSchema=new Schema({
    title:String,
    description:String,
    image:String,
    created_at:String
},{toJSON:{virtuals:true}});//virtuals varapokithu athukkakathaan

postSchema.virtual('short_description').get(function(){
    return this.description.substring(0,100)+'...'
});
//but ithu database la store aakathu

postSchema.virtual('created_at_formatted').get(function(){
    this.created_at
});

function changeDateFormat(date_str){
    const date=new Date(date_str);
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    return `${months[date.getMonth()]} ${date.getDate()}, `
}

const PostModel=models.Post || model('Post',postSchema);
//page refress aaka thirumpa intha model create pannavarum so
// earkanave model iruntha atha use pannikkanum apd illa enda new ah create pannikkanum


export default PostModel;
