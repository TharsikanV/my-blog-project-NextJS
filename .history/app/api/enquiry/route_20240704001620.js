export async function POST(req){
    const {name,email,message}=await req.json();
    const enquiry={name,email,message};
    await conn
    return Response.json({message:'success'})
}