import { Schema, model,models} from "mongoose";

const postSchema=new Schema({
    title:String,
    description:String,
    image:String
});

const PostModel=modelsmodel('Post',postSchema);

export default PostModel;
