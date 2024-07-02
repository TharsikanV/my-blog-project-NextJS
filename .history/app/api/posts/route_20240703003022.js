import connectMongo from "../../../utils/connectMongo";

export async function GET(){
    await connectMongo();
    
}