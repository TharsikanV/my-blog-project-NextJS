export async function POST(req){
    const {name,}=await req.json()
    return Response.json({message:'success'})
}