export async function POST(req){
    const {name,email,message}=await req.json();
    const 
    return Response.json({message:'success'})
}