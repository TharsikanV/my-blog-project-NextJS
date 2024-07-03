import connectMongo from "@/utils/connectMongo";

export async function POST(req){
    const {name,email,message}=await req.json();
    const enquiry={name,email,message};
    await connectMongo();
    
    return Response.json({message:'success'})
}