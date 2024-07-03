import connectMongo from "../../../utils/connectMongo";


export async function GET({params}) {
    try {
        await connectMongo();

        const postData = await PostMode.findOne({_id: params.id});
        return Response.json(postData);
    } catch (error) {
        return Response.json({message:error.message})
    }

}