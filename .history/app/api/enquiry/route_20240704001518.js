export async function POST(req){
    const {name,email,message}=await req.json()
    return Response.json({message:'success'})
}