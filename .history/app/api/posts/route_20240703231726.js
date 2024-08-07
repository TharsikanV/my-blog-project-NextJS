import connectMongo from "../../../utils/connectMongo";
import PostModel from "../../../models/postModel";

export async function GET(req) {
    try {
        await connectMongo();
        const postData = await PostModel.find({});
        return Response.json(postData);
    } catch (error) {
        return Response.json({message:error.message})
    }

}