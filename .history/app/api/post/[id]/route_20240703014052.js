import connectMongo from "../../../utils/connectMongo";
import PostModel from "../../../models/postModel";

export async function GET({params}) {
    try {
        await connectMongo();

        const postData = await PostModel.({});
        return Response.json(postData);
    } catch (error) {
        return Response.json({message:error.message})
    }

}