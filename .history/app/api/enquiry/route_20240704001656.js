import connectMongo from "@/utils/connectMongo";
import Enquiry

export async function POST(req){
    const {name,email,message}=await req.json();
    const enquiry={name,email,message};
    await connectMongo();
    Enqu
    return Response.json({message:'success'})
}