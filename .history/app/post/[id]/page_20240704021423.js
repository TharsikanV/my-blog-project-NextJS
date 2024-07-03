import Post from "@/components/Post";

export async function generateMetaData({params}){
    const id=params.id;

    const post=fetch(process.env.NEXT_PUBLIC_API_URL + '/post/' + id)
            .then(res => res.json());
    
    return{
        
    }
    
            
}

export default function Page({ params }) {
   return <Post params={params}/>
}