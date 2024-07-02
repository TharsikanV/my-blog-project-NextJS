import { Schema, model,models} from "mongoose";

const postSchema=new Schema({
    title:String,
    description:String,
    image:String
});

const PostModel=models.Post || model('Post',postSchema);
// earkanave model iruntha atha use pannikkanum apd illa enda n

export default PostModel;
