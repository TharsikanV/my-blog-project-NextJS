import connectMongo from "@/utils/connectMongo";
import EnquiryModel from "@/models/enquiryModel";

export async function POST(req){
    const {name,email,message}=await req.json();
    const enquiry={name,email,message};
    await connectMongo();
    await EnquiryModel.c
    return Response.json({message:'success'})
}