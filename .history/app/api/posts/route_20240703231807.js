import connectMongo from "../../../utils/connectMongo";
import PostModel from "../../../models/postModel";

export async function GET(req) {
    const query=req.nextUrl.searchParams
    try {
        await connectMongo();
        const postData = await PostModel.find({});
        return Response.json(postData);
    } catch (error) {
        return Response.json({message:error.message})
    }

}