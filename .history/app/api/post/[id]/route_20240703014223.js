import connectMongo from "../../../utils/connectMongo";
import PostModel from "../../"

export async function GET({params}) {
    try {
        await connectMongo();

        const postData = await PostModel.findOne({_id: params.id});
        return Response.json(postData);
    } catch (error) {
        return Response.json({message:error.message})
    }

}