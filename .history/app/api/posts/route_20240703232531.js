import connectMongo from "../../../utils/connectMongo";
import PostModel from "../../../models/postModel";

export async function GET(req) {
    const query=req.nextUrl.searchParams.get('q');//query parameters ah edukkalaam
    console.log(query,"query")
    try {
        await connectMongo();
        let postData;
        if(query){
            const postData = await PostModel.find({
                $or : [
                    {title : new RegExp(query,'i')},
                    {description : new RegExp(query,'i')}
                ]
            });
        }
        else{
            const postData = await PostModel.find({});
        }
        return Response.json(postData);
    } catch (error) {
        return Response.json({message:error.message})
    }

}