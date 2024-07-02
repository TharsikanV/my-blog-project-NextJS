import { Schema, model,models} from "mongoose";

const postSchema=new Schema({
    title:String,
    description:String,
    image:String
});

const PostModel=models.Post || model('Post',postSchema);
//page refre
// earkanave model iruntha atha use pannikkanum apd illa enda new ah create pannikkanum


export default PostModel;
