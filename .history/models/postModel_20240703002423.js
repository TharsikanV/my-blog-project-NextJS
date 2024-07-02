import { Schema ,mode} from "mongoose";

const postSchema=new Schema({
    title:String,
    description:String,
    image:String
});

