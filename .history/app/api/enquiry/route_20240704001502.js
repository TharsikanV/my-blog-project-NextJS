export async function POST(req){
    consoawait req.json()
    return Response.json({message:'success'})
}