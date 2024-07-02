import connectMongo from "../../../utils/connectMongo";
import PostModel from "../../../models/postModel";

export async function GET(){
    await connectMongo();
    const postData= await PostModel.find({});
    Response.json()
}