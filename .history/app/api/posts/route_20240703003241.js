import connectMongo from "../../../utils/connectMongo";
import PostModel from "../../../models/postModel";

export async function GET(){
    try {
        
    } catch (error) {
        
    }
    await connectMongo();
    const postData= await PostModel.find({});
    return Response.json(postData);
}